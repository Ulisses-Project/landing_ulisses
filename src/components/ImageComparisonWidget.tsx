interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  sliderPosition: number;
  containerRef: (element: HTMLDivElement | null) => void;
  onMouseDown: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const ImageComparisonWidget = ({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Después",
  sliderPosition,
  containerRef,
  onMouseDown,
  isFirst = false,
  isLast = false,
}: ImageComparisonProps) => {
  const getRoundedClass = () => {
    if (isFirst && isLast) return "rounded-xl";
    if (isFirst) return "rounded-t-xl";
    if (isLast) return "rounded-b-xl";
    return "";
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full lg:w-3/4 lg:mx-auto aspect-video overflow-hidden border-x border-primary/20 select-none cursor-ew-resize bg-black ${
        !isFirst ? "border-b mb-10" : ""
      } ${!isLast ? "border-t" : ""} ${getRoundedClass()}`}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* After image (full width) */}
      <div className="absolute inset-0">
        <img
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage || "/placeholder.svg"}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* Slider line and handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-400"></div>
            <div className="w-0.5 h-4 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonWidget;
