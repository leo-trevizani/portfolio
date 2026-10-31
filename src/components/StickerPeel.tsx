import { useRef, useState, useEffect } from 'react';
import './StickerPeel.css';

interface StickerPeelProps {
  imageSrc: string;
  width?: number;
  rotate?: number;
  finish?: 'gloss' | 'matte' | 'holo';
  draggable?: boolean;
  initialPosition?: 'center' | { x: number; y: number };
  style?: React.CSSProperties;
  className?: string;
}

const StickerPeel = ({
  imageSrc,
  width = 140,
  rotate = 0,
  finish = 'gloss',
  draggable = true,
  initialPosition = 'center',
  style,
  className = '',
}: StickerPeelProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current?.parentElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const start = initialPosition && typeof initialPosition === 'object' ? initialPosition : { x: 0, y: 0 };
    setPos({ x: rect.width / 2 + (start.x || 0) - width / 2, y: rect.height / 2 + (start.y || 0) - (width * 0.9) / 2 });
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    setDragging(true);
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    root.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging || !draggable) return;
    const parent = rootRef.current?.parentElement;
    if (!parent) return;
    const pRect = parent.getBoundingClientRect();
    const root = rootRef.current;
    if (!root) return;
    const newX = e.clientX - pRect.left - offset.current.x;
    const newY = e.clientY - pRect.top - offset.current.y;
    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = () => setDragging(false);

  const finishShadow = finish === 'holo'
    ? '0 0 0 2px rgba(255,255,255,0.6) inset, 0 10px 25px rgba(0,0,0,0.35)'
    : finish === 'matte'
      ? '0 4px 15px rgba(0,0,0,0.25)'
      : '0 8px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.15) inset';

  return (
    <div
      ref={rootRef}
      className={`sticker-peel-wrapper ${className} ${dragging ? 'dragging' : ''}`}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: width * 0.9,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${rotate}deg)`,
        touchAction: 'none',
        userSelect: 'none',
        zIndex: 10,
        cursor: draggable ? (dragging ? 'grabbing' : 'grab') : 'default',
        ...style,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <img
        src={imageSrc}
        alt="sticker"
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: dragging ? 'brightness(1.05)' : 'none',
          boxShadow: finishShadow,
          borderRadius: '50%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default StickerPeel;
