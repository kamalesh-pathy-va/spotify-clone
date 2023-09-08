import { useState, useEffect } from "react";

export const useElementSize = (eleRef) => {
  const [elementSize, setElementSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setElementSize({
        width: eleRef.current.offsetWidth,
        height: eleRef.current.offsetHeight,
      });
    };

    // Calling the function to initially value of 0,0 to actual size
    if (eleRef.current) {
      handleResize()
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [eleRef]);

  return elementSize;
}

