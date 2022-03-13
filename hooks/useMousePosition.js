import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (typeof document !== "undefined") {
      const handler = (e) => {
        setPosition({ ...position, x: e.clientX, y: e.clientY });
      };
      document.addEventListener("mousemove", handler);
      return () => document.removeEventListener("mousemove", handler);
    }
  }, []);
  return position;
};

export default useMousePosition;
