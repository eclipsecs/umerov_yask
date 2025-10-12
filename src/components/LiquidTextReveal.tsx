import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LiquidTextRevealProps {
  text: string;
}

const LiquidTextReveal = ({ text }: LiquidTextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.3,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.8,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glowVariants = {
    animate: {
      textShadow: [
        '0 0 20px rgba(236, 72, 153, 0.3)',
        '0 0 40px rgba(236, 72, 153, 0.5)',
        '0 0 20px rgba(236, 72, 153, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div ref={containerRef} className="perspective-1000">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight text-gray-900 dark:text-white text-left inline-flex flex-wrap gap-x-4 gap-y-2"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block origin-bottom"
            variants={wordVariants}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span
              className="inline-block"
              variants={floatVariants}
              animate="animate"
              style={{
                animationDelay: `${wordIndex * 0.2}s`,
              }}
            >
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={glowVariants}
                  animate="animate"
                  style={{
                    animationDelay: `${(wordIndex * 0.2 + charIndex * 0.05)}s`,
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: '#ec4899',
                    transition: { duration: 0.2 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default LiquidTextReveal;
