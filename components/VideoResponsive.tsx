"use client";
import { useEffect, useState } from "react";

const VideoResponsive = ({
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

  return (
    <video
      autoPlay
      muted
      playsInline
      poster={isMobile ? posterMobile : posterDesktop}
      src={isMobile ? videoSrcMobile : videoSrcDesktop}
    ></video>
  );
};

export default VideoResponsive;
