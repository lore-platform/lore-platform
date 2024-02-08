// useScreenSize.js
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [screenSize, setScreenSize] = useState(
    getScreenSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize };
}

function getScreenSize(width) {
  if (width <= 600) return "small";
  else if (width <= 1024) return "medium";
  else if (width <= 1280) return "large";
  else if (width <= 1536) return "xlarge";
  else return "xxlarge";
}
