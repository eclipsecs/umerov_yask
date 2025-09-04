import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

export const GooeyText: React.FC<GooeyTextProps> = ({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [morphing, setMorphing] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setMorphing(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        
        setTimeout(() => {
          setMorphing(false);
        }, morphTime * 500);
      }, morphTime * 500);
      
    }, (morphTime + cooldownTime) * 1000);

    return () => clearInterval(interval);
  }, [texts.length, morphTime, cooldownTime]);

  return (
    <span
      ref={textRef}
      className={cn(
        "inline-block transition-all duration-500 ease-in-out",
        morphing && "scale-105 blur-[1px]",
        className
      )}
      style={{
        filter: morphing ? 'url(#gooey)' : 'none',
      }}
    >
      {texts[currentIndex]}
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </span>
  );
};