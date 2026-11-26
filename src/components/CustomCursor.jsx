import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        if (cursorType === 'project' || cursorType === 'view') {
          setCursorVariant('project');
          setCursorText('VIEW');
        } else if (cursorType === 'hover' || cursorType === 'button') {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#ffffff',
      border: '0px solid transparent',
      mixBlendMode: 'difference',
      transition: { type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      border: '1px solid rgba(165, 180, 252, 0.5)',
      mixBlendMode: 'normal',
      transition: { type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }
    },
    project: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      width: 72,
      height: 72,
      backgroundColor: 'rgba(99, 102, 241, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      mixBlendMode: 'normal',
      transition: { type: 'spring', damping: 25, stiffness: 300, mass: 0.2 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest text-white uppercase shadow-lg select-none backdrop-blur-[2px]"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === 'project' && cursorText}
    </motion.div>
  );
}
