import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href, dataCursor = 'button', ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={{ x, y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
      data-cursor={dataCursor}
      className={`relative inline-flex items-center justify-center transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
