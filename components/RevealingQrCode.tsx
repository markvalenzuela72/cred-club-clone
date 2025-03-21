"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const RevealingQrCode = ({ assetBaseURL }: { assetBaseURL: string }) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in effect 2 seconds after video loads
  useEffect(() => {
    if (isVideoLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVideoLoaded]);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 448); // Change breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (!videoRef.current) return;

    const videoElement = videoRef.current;

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    // GSAP ScrollTrigger
    const trigger = gsap.to(videoElement, {
      scrollTrigger: {
        id: "videoTrigger",
        trigger: scrollSectionRef.current,
        start: "top top",
        end: "top top",
        pin: true, // Pins the video while scrolling
        scrub: true,
        // markers: true, // Remove in production
        onEnter: () => disableScroll(),
        onLeaveBack: () => enableScroll(),
      },
    });
    const handleVideoEnd = () => {
      enableScroll();
      setIsVideoLoaded(true);
      trigger.kill();
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      enableScroll();
      trigger.kill();
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  const posterDesktop = `${assetBaseURL}images/cards/desktop/cta/cta-fold-desktop-poster.jpg?tr=orig`;
  const posterMobile = `${assetBaseURL}images/cards/mobile/single-card/single-card-fold-mobile-poster.jpg?tr=orig`;
  const videoSrcDesktop = `${assetBaseURL}videos/cards/desktop/cta/cta-fold-desktop.mp4?tr=orig`;
  const videoSrcMobile = `${assetBaseURL}videos/cards/mobile/single-card/single-card-fold-mobile.mp4?tr=q-95`;

  // console.log(isVideoLoaded);
  return (
    <section ref={scrollSectionRef} className="relative">
      <div
        className={`items-center justify-center flex-col transition-opacity duration-500 absolute z-2 top-[50px] m-auto left-0 right-0 ${
          isVisible ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="flex bg-white border border-black/20 p-5 gap-3 justify-center align-center mb-4">
          <Image
            alt="logo"
            src={`${assetBaseURL}images/cards/cred-qr.png`}
            width={80}
            height={80}
          />
          <div className="text-black text-2xl text-center">
            download
            <br />
            CRED
          </div>
        </div>
      </div>

      <video
        preload="auto"
        ref={videoRef}
        poster={isMobile ? posterMobile : posterDesktop}
        src={isMobile ? videoSrcMobile : videoSrcDesktop}
        autoPlay
        muted
        playsInline
        className="w-full"
      />
    </section>
  );
};

export default RevealingQrCode;
