import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LiquidTextRevealProps {
  text: string;
}

const LiquidTextReveal = ({ text }: LiquidTextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative perspective-1000 overflow-visible">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight text-gray-900 dark:text-white text-left inline-flex flex-wrap gap-x-4 gap-y-2"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block relative"
          >
            {word.split('').map((char, charIndex) => {
              const totalIndex = wordIndex * 10 + charIndex;

              return (
                <AnimatedChar
                  key={charIndex}
                  char={char}
                  index={totalIndex}
                  mousePosition={mousePosition}
                />
              );
            })}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  mousePosition: { x: number; y: number };
}

const AnimatedChar = ({ char, index, mousePosition }: AnimatedCharProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [charPosition, setCharPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCharPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);

  const distance = Math.sqrt(
    Math.pow(mousePosition.x - charPosition.x, 2) +
    Math.pow(mousePosition.y - charPosition.y, 2)
  );

  const maxDistance = 200;
  const magnetStrength = Math.max(0, 1 - distance / maxDistance);

  const charVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -100,
      rotateX: -180,
      rotateZ: -180,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 80,
        mass: 1.2,
        delay: index * 0.03,
        duration: 1.2,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className="inline-block relative"
      variants={charVariants}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        y: [0, -12, 0],
        rotateZ: [0, 2, -2, 0],
        scale: 1 + magnetStrength * 0.3,
      }}
      transition={{
        y: {
          duration: 3 + index * 0.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.1,
        },
        rotateZ: {
          duration: 4 + index * 0.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.05,
        },
        scale: {
          duration: 0.3,
        },
      }}
      whileHover={{
        scale: 1.4,
        rotateY: 360,
        color: '#ec4899',
        textShadow: '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)',
        transition: {
          duration: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      }}
    >
      <motion.span
        className="inline-block"
        animate={{
          textShadow: [
            '0 0 10px rgba(59, 130, 246, 0.3)',
            '0 0 20px rgba(236, 72, 153, 0.4)',
            '0 0 10px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{
          duration: 2 + index * 0.05,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {char}
      </motion.span>
    </motion.span>
  );
};

export default LiquidTextReveal;
