import React from 'react';
import { motion } from 'motion/react';

export function SpecialText({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const text = typeof children === 'string' ? children : String(children);

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.02,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, filter: 'blur(8px)', y: 5 },
            visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
