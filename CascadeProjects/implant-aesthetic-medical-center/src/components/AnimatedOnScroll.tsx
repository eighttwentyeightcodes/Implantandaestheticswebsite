import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  /**
   * Optionally override the animation variants (default is pop-up/fade-in)
   */
  variants?: Variants;
  /**
   * Optionally delay the animation (in seconds)
   */
  delay?: number;
  /**
   * Optionally set the animation duration (in seconds)
   */
  duration?: number;
  /**
   * Optionally set the trigger threshold (0 to 1, default 0.2)
   */
  threshold?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

export const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  variants = defaultVariants,
  delay = 0,
  duration = 0.7,
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
