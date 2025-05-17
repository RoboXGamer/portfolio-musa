import { useEffect, useState } from 'react';

const Bubble = ({ size, position, speed }) => {
  return (
    <div
      className={`absolute rounded-full bg-blue-600/50 blur-xl `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        animation: `float ${speed}s infinite linear`,
      }}
    />
  );
};

export default function Bubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // Size between 20-80px
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      speed: Math.random() * 15 + 10, // Speed between 10-25s
    }));

    setBubbles(newBubbles);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(50px, -50px) rotate(90deg);
            }
            50% {
              transform: translate(0, -100px) rotate(180deg);
            }
            75% {
              transform: translate(-50px, -50px) rotate(270deg);
            }
            100% {
              transform: translate(0, 0) rotate(360deg);
            }
          }
        `}
      </style>
      <div className="fixed inset-0 pointer-events-none -z-100">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>
    </>
  );
}