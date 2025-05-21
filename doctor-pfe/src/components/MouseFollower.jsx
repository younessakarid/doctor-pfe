import React, { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-[#1e84b5] rounded-full pointer-events-none z-50 transition-transform duration-75 ease-linear"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    />
  );
};

export default MouseFollower;
