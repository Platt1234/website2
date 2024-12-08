import React, { Suspense, memo } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const SplineWrapper = memo(function SplineWrapper() {
  return (
    <div 
      className="absolute inset-0"
      style={{ 
        transform: 'scale(1) translateX(calc(15% + 85px))',
        transformOrigin: 'center',
        willChange: 'transform'
      }}
    >
      <Spline 
        scene="https://prod.spline.design/BuaYq9PArN3TgoU1/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
});

function LoadingFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 40%)
          `
        }}
      />
    </div>
  );
}

export function SplineBackground() {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-primary-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <SplineWrapper />
      </Suspense>
      <div className="absolute inset-0 bg-primary-900/50" />
    </motion.div>
  );
}