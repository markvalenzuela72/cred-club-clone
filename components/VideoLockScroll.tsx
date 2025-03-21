"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VideoLockScroll = ({
  posterDesktop,
  posterMobile,
  videoSrcDesktop,
  videoSrcMobile,
}: {
  posterDesktop: string;
  posterMobile: string;
  videoSrcDesktop: string;
  videoSrcMobile: string;
}) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    // console.log({ videoElement });
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
      trigger.kill();
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      enableScroll();
      trigger.kill();
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div ref={scrollSectionRef} className="scroll-section w-full h-screen">
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
    </div>
  );
};

export default VideoLockScroll;
