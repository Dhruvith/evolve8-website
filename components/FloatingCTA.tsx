'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const FloatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    window.location.href = '/elev8-startups';
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.5, 
        delay: shouldReduceMotion ? 0 : 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Apply for Elev8 Alpha"
      >
        {/* Pulsing background glow */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple via-violet to-lightPurple opacity-75"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.75, 0.55, 0.75],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        )}

        {/* Main button */}
        <div className="relative flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple via-violet to-lightPurple rounded-full shadow-2xl shadow-purple/50 backdrop-blur-sm border border-white/20 hover:shadow-purple/70 transition-shadow duration-300">
          <Rocket className="w-5 h-5 text-white flex-shrink-0" />
          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-white font-semibold whitespace-nowrap overflow-hidden hidden md:block"
              >
                Apply for Elev8 Alpha
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </motion.div>
  );
};

