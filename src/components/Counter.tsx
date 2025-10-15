/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

import { texts } from '../constants/pt_br';
import {
  CelebrationText,
  CountdownBox,
  CountdownGrid,
  CountdownLabel,
  CountdownNumber,
  CountdownSection,
  CountdownTitle,
} from '../styles/countdown.styles';

export default function Counter() {
  const targetDate = new Date('2026-04-25T10:30:00');
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
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  if (timeLeft.total <= 0) {
    return <CelebrationText>{texts.counter.celebrationText}</CelebrationText>;
  }

  return (
    <CountdownSection>
      <CountdownTitle>{texts.counter.countdownText}</CountdownTitle>

      <CountdownGrid>
        {[
          { label: 'Dias', value: timeLeft.days },
          { label: 'Horas', value: timeLeft.hours },
          { label: 'Minutos', value: timeLeft.minutes },
          { label: 'Segundos', value: timeLeft.seconds },
        ].map(item => (
          <CountdownBox key={item.label}>
            <CountdownNumber>
              {item.value.toString().padStart(2, '0')}
            </CountdownNumber>
            <CountdownLabel>{item.label}</CountdownLabel>
          </CountdownBox>
        ))}
      </CountdownGrid>
    </CountdownSection>
  );
}
