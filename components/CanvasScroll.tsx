"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CanvasScroll = ({
  assetImagesUrl,
  frameCount,
}: {
  assetImagesUrl: string;
  frameCount: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadImages = () => {
      const imgArray: HTMLImageElement[] = [];
      for (let i = 0; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${assetImagesUrl}${i}.jpg?tr=orig`;
        imgArray.push(img);
      }
      setImages(imgArray);
    };

    loadImages(); // Load images
  }, [assetImagesUrl, frameCount]);

  useGSAP(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawImageOnCanvas = (index: number) => {
      if (index < 0 || index >= images.length) return;
      const img = images[index];

      if (!img.complete) {
        img.onload = () => draw(index);
      } else {
        draw(index);
      }
    };

    const draw = (index: number) => {
      const img = images[index];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    gsap.to(
      {},
      {
        scrollTrigger: {
          id: "canvasTrigger",
          trigger: canvas,
          start: "top top",
          scrub: 1,
          pin: true,
          end: "bottom+=4000px",
          // markers: true, // Debugging
          onUpdate: (self) => {
            const index = Math.min(
              images.length - 1,
              Math.floor(self.progress * images.length)
            );
            drawImageOnCanvas(index);
          },
        },
      }
    );
  }, [images]);

  return <canvas ref={canvasRef} className="w-full" />;
};

export default CanvasScroll;
