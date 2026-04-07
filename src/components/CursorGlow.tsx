import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-[300px] h-[300px] rounded-full opacity-20 transition-transform duration-75"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
