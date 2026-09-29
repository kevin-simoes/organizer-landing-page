import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  speedOnHover,
  className = "",
}) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [contentWidth, setContentWidth] = useState(0);
  const measureRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContentWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    const distance = contentWidth + gap;
    const moveBy = currentSpeed * (delta / 1000);

    let newX = x.get() - moveBy;
    if (newX <= -distance) {
      newX += distance;
    }
    x.set(newX);
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max"
        style={{ x, gap }}
        onHoverStart={() => speedOnHover !== undefined && setCurrentSpeed(speedOnHover)}
        onHoverEnd={() => setCurrentSpeed(speed)}
      >
        <div ref={measureRef} className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}