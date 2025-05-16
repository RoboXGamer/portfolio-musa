import React, { useEffect, useRef } from "react";

function MouseFollower() {
  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef(null);

  const fadeIn = () => {
    if (followerRef.current) {
      followerRef.current.style.opacity = "1";
    }
  };

  const fadeOut = () => {
    if (followerRef.current) {
      followerRef.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      fadeIn(); // show on movement

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fadeOut(); // hide after delay
      }, 1000); // <- 1000ms = 1s idle before fade out
    };

    const animate = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.1;

      const follower = followerRef.current;
      if (follower) {
        follower.style.left = `${currentPos.current.x}px`;
        follower.style.top = `${currentPos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
    className="h-20 w-20 blur-2xl bg-blue-600 "
      ref={followerRef}
      style={{
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.5s ease", // ✨ smooth fading
        opacity: 0,
        zIndex: 9999,
      }}
    />
  );
}

export default MouseFollower;
