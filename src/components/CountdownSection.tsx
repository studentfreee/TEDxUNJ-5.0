import { useState, useEffect } from 'react';

interface NumberSvgProps {
  num: string;
}

function NumberSvg({ num }: NumberSvgProps) {
  return (
    <svg className="timer-number-svg-element" viewBox="0 0 120 90">
      <defs>
        <linearGradient id={`numGrad-${num}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DE2F5A" />
          <stop offset="100%" stopColor="#FDA22F" />
        </linearGradient>
        <filter id={`numShadow-${num}`} x="-20%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="-3" dy="6" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontWeight="900"
        fontSize="62"
        fill={`url(#numGrad-${num})`}
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinejoin="round"
        paintOrder="stroke fill"
        filter={`url(#numShadow-${num})`}
      >
        {num}
      </text>
    </svg>
  );
}

function ColonDots() {
  return (
    <div className="colon-dot-wrapper">
      <svg className="colon-dots-svg" viewBox="0 0 30 200">
        <filter id="colonShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
        </filter>
        {/* Titik Atas */}
        <circle cx="15" cy="64" r="11" fill="#DE2F5A" filter="url(#colonShadow)" />
        {/* Titik Bawah */}
        <circle cx="15" cy="136" r="11" fill="#DE2F5A" filter="url(#colonShadow)" />
      </svg>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const targetTime = Date.now() + (90 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="countdown-section">
      {/* Top Left Watermark: countdown_logo_watermark.svg */}
      <div className="countdown-top-left-watermark">
        <img src="/assets/betawi/countdown_logo_watermark.svg" alt="Countdown Logo Watermark Left" className="top-left-watermark-img" />
      </div>

      {/* Top Right Watermark: countdown_logo_watermark.svg (mirrored) */}
      <div className="countdown-top-right-watermark">
        <img src="/assets/betawi/countdown_logo_watermark.svg" alt="Countdown Logo Watermark Right" className="top-right-watermark-img" />
      </div>

      <div className="countdown-inner">
        {/* Title Header SVG: new_chapter.svg */}
        <div className="countdown-title-wrapper">
          <img src="/assets/betawi/new_chapter.svg" alt="A New Chapter Unlocks In ..." className="countdown-title-svg" />
        </div>

        {/* Layer 2: Independent Floating Glass Card Container */}
        <div className="countdown-glass-card">
          {/* Grid of 4 Timer Cards & 3 Colon Separator Pairs */}
          <div className="timer-cards-grid">
            {/* Card 1: Days */}
            <div className="timer-unit">
              <div className="countdown-timer-box">
                <NumberSvg num={formatNumber(timeLeft.days)} />
              </div>
              <img src="/assets/betawi/days.svg" alt="Days" className="countdown-unit-label-svg" />
            </div>

            {/* Separator 1 */}
            <ColonDots />

            {/* Card 2: Hours */}
            <div className="timer-unit">
              <div className="countdown-timer-box">
                <NumberSvg num={formatNumber(timeLeft.hours)} />
              </div>
              <img src="/assets/betawi/hours.svg" alt="Hours" className="countdown-unit-label-svg" />
            </div>

            {/* Separator 2 */}
            <ColonDots />

            {/* Card 3: Minutes */}
            <div className="timer-unit">
              <div className="countdown-timer-box">
                <NumberSvg num={formatNumber(timeLeft.minutes)} />
              </div>
              <img src="/assets/betawi/minutes.svg" alt="Minutes" className="countdown-unit-label-svg" />
            </div>

            {/* Separator 3 */}
            <ColonDots />

            {/* Card 4: Seconds */}
            <div className="timer-unit">
              <div className="countdown-timer-box">
                <NumberSvg num={formatNumber(timeLeft.seconds)} />
              </div>
              <img src="/assets/betawi/second.svg" alt="Seconds" className="countdown-unit-label-svg" />
            </div>
          </div>
        </div>

        {/* Repeating Betawi Pager Row Layer */}
        <div className="countdown-pager-row">
          {Array.from({ length: 24 }).map((_, idx) => (
            <img key={idx} src="/assets/betawi/pager1.svg" alt="Betawi Pager" className="pager-unit-img" />
          ))}
        </div>

        {/* Sub-caption Text SVG: every_second.svg */}
        <div className="countdown-subcaption-wrapper">
          <img
            src="/assets/betawi/every_second.svg"
            alt="Every second brings us closer to the TEDxUNJ Main Event ...."
            className="countdown-subcaption-svg"
          />
        </div>
      </div>

      {/* Bottom Rectangle Banner: rectangle1.svg */}
      <div className="countdown-bottom-rectangle-wrapper">
        <img src="/assets/betawi/rectangle1.svg" alt="Bottom Rectangle" className="countdown-bottom-rectangle-svg" />
      </div>
    </section>
  );
}
