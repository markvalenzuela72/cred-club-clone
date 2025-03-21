"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CanvasScroll = ({
  assetImagesUrl,
  frameCount,
  canvasHeight,
}: {
  assetImagesUrl: string;
  frameCount: number;
  canvasHeight: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
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
    ScrollTrigger.create({
      trigger: scrollSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: canvas,
      // markers: true,
      onUpdate: (self) => {
        const index = Math.min(
          images.length - 1,
          Math.floor(self.progress * images.length)
        );
        drawImageOnCanvas(index);
      },
    });
    // gsap.to(
    //   {},
    //   {
    //     scrollTrigger: {
    //       id: "canvasTrigger",
    //       trigger: scrollSectionRef.current,
    //       start: "top top",
    //       scrub: 1,
    //       pin: canvas,
    //       end: "bottom+=4000px",
    //       preventOverlaps: true,
    // markers: true, // Debugging
    //       onUpdate: (self) => {
    //         const index = Math.min(
    //           images.length - 1,
    //           Math.floor(self.progress * images.length)
    //         );
    //         drawImageOnCanvas(index);
    //       },
    //     },
    //   }
    // );
  }, [images]);

  return (
    <div
      ref={scrollSectionRef}
      className={`scroll-section w-full]`}
      style={{ height: `${canvasHeight}vh` }}
    >
      <canvas ref={canvasRef} className="w-full" />;
    </div>
  );
};

export default CanvasScroll;
