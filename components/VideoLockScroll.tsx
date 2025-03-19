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
  viewPort,
}: {
  posterDesktop: string;
  posterMobile: string;
  videoSrcDesktop: string;
  videoSrcMobile: string;
  viewPort: number;
}) => {
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
    console.log(videoElement.getBoundingClientRect);
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
        trigger: videoElement,
        start: `top+=${viewPort}px`, // Start when the video enters from the bottom
        // end: "bottom bottom", // Start when the video enters from the bottom
        // pin: true, // Pins the video while scrolling
        scrub: true,
        markers: true, // Remove in production
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
    <div className="flex justify-center items-center">
      <video
        ref={videoRef}
        poster={isMobile ? posterMobile : posterDesktop}
        src={isMobile ? videoSrcMobile : videoSrcDesktop}
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default VideoLockScroll;
