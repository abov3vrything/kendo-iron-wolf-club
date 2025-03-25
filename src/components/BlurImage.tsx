
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  lowResSrc?: string;
  className?: string;
  imgClassName?: string;
  containerClassName?: string;
}

export default function BlurImage({
  src,
  alt,
  lowResSrc,
  className,
  imgClassName,
  containerClassName,
}: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const containerStyle = lowResSrc ? {
    backgroundImage: `url(${lowResSrc})`,
  } : {};

  return (
    <div
      className={cn(
        "blur-load relative overflow-hidden",
        isLoaded && "loaded",
        containerClassName
      )}
      style={containerStyle}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500 ease-in-out",
          imgClassName
        )}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
