'use client';

import React from 'react';

export function Elev8AlarmLogo({
  size = 22,
  className = '',
  label = 'Elev8 Startups',
}: {
  size?: number;
  className?: string;
  label?: string;
}) {
  const px = Math.max(16, size);

  return (
    <span className={`inline-flex items-center ${className}`} aria-label={label} title={label}>
      {/* Attention ring */}
      <span className="elev8-alarm-ring" aria-hidden="true" />

      {/* Logo */}
      <span className="relative elev8-alarm-logo" style={{ width: px, height: px }}>
        <svg width={px} height={px} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* ELEV8 Text */}
          <text x="5" y="28" fontFamily="Outfit, sans-serif" fontSize="24" fontWeight="bold" fill="#9333EA">ELEV8</text>
          {/* STARTUPS Text */}
          <text x="5" y="45" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="600" fill="#60A5FA">STARTUPS</text>
          {/* Upward Arrows */}
          <path d="M 75 35 L 85 25 L 95 35" stroke="#9CA3AF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 78 32 L 88 22 L 98 32" stroke="#22C55E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </span>
  );
}


