import { useState, useRef, useCallback } from "react";

interface ExteriorInteriorSliderProps {
  exteriorImage: string;
  interiorImage: string;
  alt: string;
}

const ExteriorInteriorSlider = ({ exteriorImage, interiorImage, alt }: ExteriorInteriorSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] overflow-hidden cursor-col-resize select-none rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Interior (background layer) */}
      <img src={interiorImage} alt={`${alt} interior`} className="absolute inset-0 w-full h-full object-cover" />

      {/* Exterior (clipped layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={exteriorImage} alt={`${alt} exterior`} className="w-full h-full object-cover" />
      </div>

      {/* Slider line + handle */}
      <div className="absolute top-0 bottom-0" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white/80" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border-2 border-primary shadow-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs font-medium bg-foreground/70 text-white px-2 py-1 rounded">
        Exterior
      </span>
      <span className="absolute top-3 right-3 text-xs font-medium bg-foreground/70 text-white px-2 py-1 rounded">
        Interior
      </span>
    </div>
  );
};

export default ExteriorInteriorSlider;
