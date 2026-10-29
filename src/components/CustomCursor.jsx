import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if fine pointer is detected (mouse, not touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let currentPos = { x: -100, y: -100 };
    let currentTrail = { x: -100, y: -100 };
    let animationFrame;

    const onMouseMove = (e) => {
      currentPos = { x: e.clientX, y: e.clientY };
      setPos(currentPos);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const checkHoverable = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-item') ||
        target.closest('.ledger-item') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', checkHoverable);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      // Smooth interpolation for trailing ring
      currentTrail.x += (currentPos.x - currentTrail.x) * 0.22;
      currentTrail.y += (currentPos.y - currentTrail.y) * 0.22;
      setTrailPos({ x: currentTrail.x, y: currentTrail.y });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHoverable);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isHovered ? 'cursor-hover' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
        aria-hidden="true"
      />
      <div
        className={`cursor-ring ${isHovered ? 'cursor-ring-expanded' : ''}`}
        style={{ transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)` }}
        aria-hidden="true"
      />
    </>
  );
}
