import { useState, useEffect } from "react";

export const useElementScroll = (eleRef) => {
  const [elementScroll, setElementScroll] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const el = eleRef.current;
      setElementScroll({
        top: el.scrollTop,
        left: el.scrollLeft,
      })
    };

    const element = eleRef.current;
    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [eleRef]);

  return elementScroll;
}

