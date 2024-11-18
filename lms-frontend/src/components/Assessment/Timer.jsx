import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

export function Timer({ timeLimit, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
      <TimerIcon className="w-5 h-5" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}
