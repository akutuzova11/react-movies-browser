import { useEffect, useState } from "react";
import { theme } from "../core/theme";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoint.mobileMax
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
