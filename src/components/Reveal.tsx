import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  animation?: 'slide-up' | 'slide-in-right' | string;
  delay?: string | number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  // Parse delay string to number (e.g., 'delay-150' -> 0.15)
  let delayNum = typeof delay === 'number' ? delay : 0;
  if (typeof delay === 'string' && delay.startsWith('delay-')) {
    delayNum = parseInt(delay.replace('delay-', ''), 10) / 1000;
  }

  // Map legacy animations to the new unified system
  let activeAnimation = 'slide-up';
  if (animation === 'slide-from-right' || animation === 'slide-in-right') {
    activeAnimation = 'slide-in-right';
  }

  const variants = {
    'slide-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delayNum } 
      },
    },
    'slide-in-right': {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delayNum } 
      },
    },
  };

  return (
    <motion.div
      variants={variants[activeAnimation as keyof typeof variants]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
