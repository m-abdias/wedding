/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export default function Contador() {
  const targetDate = new Date("2026-04-25T10:30:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeRemaining(endDate: any) {
    const total = Date.parse(endDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total, days, hours, minutes, seconds
    };
  }

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center text-pink-600 text-xl sm:text-2xl font-semibold mt-8">
        🎉 Chegou o grande dia!
      </div>
    );
  }

  return (
    <section className="text-center py-10">
      <h2 className="text-gray-700 text-sm sm:text-sm tracking-wide uppercase mb-8 font-light">
        Contagem regressiva para o grande dia
      </h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
        {[
          { label: "Dias", value: timeLeft.days },
          { label: "Horas", value: timeLeft.hours },
          { label: "Minutos", value: timeLeft.minutes },
          { label: "Segundos", value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center bg-gray-100 rounded-md shadow-sm px-4 py-3 w-20 sm:w-24"
          >
            <span className="text-2xl sm:text-3xl font-light text-gray-800">
              {item.value.toString().padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
