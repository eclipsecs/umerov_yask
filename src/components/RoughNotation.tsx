import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

interface RoughNotationProps {
  children: React.ReactNode;
  type?: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
  animationDuration?: number;
  multiline?: boolean;
  brackets?: 'left' | 'right' | ['left', 'right'];
}

const RoughNotation: React.FC<RoughNotationProps> = ({
  children,
  type = 'box',
  color = '#f7fb09ff',
  strokeWidth = 2,
  animate = true,
  animationDuration = 1000,
  multiline = false,
  brackets = 'left'
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const annotation = annotate(elementRef.current, {
      type,
      color,
      strokeWidth,
      multiline,
      ...(type === 'bracket' && { brackets }),
    });

    if (animate) {
      const timer = setTimeout(() => {
        annotation.show();
      }, 500); // Small delay before starting animation

      return () => {
        clearTimeout(timer);
        annotation.hide();
      };
    } else {
      annotation.show();
    }

    return () => {
      annotation.hide();
    };
  }, [type, color, strokeWidth, animate, animationDuration, multiline, brackets]);

  return React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    {
      ref: elementRef,
      className: `${(children as React.ReactElement).props.className || ''} rough-notation`.trim()
    }
  );
};

export default RoughNotation;