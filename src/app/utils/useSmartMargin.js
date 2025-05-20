import { useEffect, useState } from "react";

export default function useSmartMargin(threshold = 1500) {
  const [applyMargin, setApplyMargin] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setApplyMargin(window.innerWidth > threshold);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return applyMargin;
}
