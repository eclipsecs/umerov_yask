import React, { useEffect, useRef, useState } from 'react';
import { annotate } from 'rough-notation';
import { useTheme } from '@/contexts/ThemeContext';

interface RoughNotationProps {
  children: React.ReactNode;
  type?: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
  animationDuration?: number;
  multiline?: boolean;
  brackets?: 'left' | 'right' | ['left', 'right'];
  onHover?: boolean;
}

const RoughNotation: React.FC<RoughNotationProps> = ({
  children,
  type = 'box',
  color,
  strokeWidth = 2,
  animate = true,
  animationDuration = 1000,
  multiline = false,
  brackets = 'left',
  onHover = false
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  
  const defaultColor = color || (theme === 'dark' ? '#f7fb09ff' : '#e91e63ff');

  useEffect(() => {
    if (!elementRef.current) return;

    const annotation = annotate(elementRef.current, {
      type,
      color: defaultColor,
      strokeWidth,
      multiline,
      ...(type === 'bracket' && { brackets }),
    });

    if (onHover) {
      if (isHovered) {
        annotation.show();
      } else {
        annotation.hide();
      }
    } else if (animate) {
      const timer = setTimeout(() => {
        annotation.show();
      }, 500);

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
  }, [type, defaultColor, strokeWidth, animate, animationDuration, multiline, brackets, onHover, isHovered, theme]);

  const handleMouseEnter = () => {
    if (onHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (onHover) setIsHovered(false);
  };

  return React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    {
      ref: elementRef,
      className: `${(children as React.ReactElement).props.className || ''} rough-notation relative inline-block`.trim(),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        ...((children as React.ReactElement).props.style || {}),
        color: theme === 'dark' && (type === 'box' || type === 'highlight') ? '#000000' : undefined
      }
    }
  );
};

export default RoughNotation;