import { useState } from 'react';
import { Play } from 'lucide-react';

export default function VisualIdentitySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="visual-identity" className="visual-identity-section">
      {/* Top Left Corner Emblem (logo_31.png) */}
      <img
        src="/assets/betawi/logo_31.png"
        alt="TEDx Emblem Left"
        className="vi-top-left-emblem"
      />
      {/* Top Right Corner Emblem (logo_31.png) */}
      <img
        src="/assets/betawi/logo_31.png"
        alt="TEDx Emblem Right"
        className="vi-top-right-emblem"
      />

      {/* Bottom Left & Bottom Right Watermarks (logo26_stroke.svg) matching What Will You Get section */}
      <img
        src="/assets/betawi/logo26_stroke.svg"
        alt="Watermark Bottom Left"
        className="vi-wm-bl"
      />
      <img
        src="/assets/betawi/logo26_stroke.svg"
        alt="Watermark Bottom Right"
        className="vi-wm-br"
      />

      {/* Flanking Monas Pillars (Left & Right) */}
      <img
        src="/assets/betawi/monas.svg"
        alt="Monas Left"
        className="vi-monas vi-monas--left"
      />
      <img
        src="/assets/betawi/monas.svg"
        alt="Monas Right"
        className="vi-monas vi-monas--right"
      />

      <div className="visual-identity-inner">
        {/* Main Section Header: "Visual Identity ‘Betawi Culture’" */}
        <div className="vi-title-wrapper">
          <svg className="vi-title-svg" viewBox="0 0 920 90">
            <defs>
              <linearGradient id="viTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DE2F5A" />
                <stop offset="100%" stopColor="#FD8A2F" />
              </linearGradient>
              <filter id="viTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
                <feDropShadow dx="-9.62" dy="19.24" stdDeviation="4.8" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              fontFamily="'Source Serif 4', Georgia, serif"
              fontWeight="900"
              fontSize="52"
              fill="url(#viTitleGrad)"
              stroke="#FFFFFF"
              strokeWidth="9.62"
              strokeLinejoin="round"
              paintOrder="stroke fill"
              filter="url(#viTitleShadow)"
              className="vi-title-text"
            >
              Visual Identity ‘Betawi Culture’
            </text>
          </svg>
        </div>

        {/* Video / Teaser Showcase Container (Cream Background + Glowing Border matching Gambar 2) */}
        <div className="vi-video-stage-wrapper">
          <div className="vi-video-frame">
            {!isPlaying ? (
              <div
                className="vi-video-cream-poster"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label="Play Teaser Video"
              >
                <div className="vi-play-button-glow">
                  <Play size={42} fill="#FFFFFF" color="#FFFFFF" className="vi-play-icon" />
                </div>
              </div>
            ) : (
              <video controls autoPlay className="vi-video-player">
                <source src="/assets/betawi/video-visual-identity.webm" type="video/webm" />
                Browser Anda tidak mendukung pemutaran video ini.
              </video>
            )}
          </div>
        </div>

        {/* Description Text Block */}
        <div className="vi-description-card">
          <p className="vi-description-text">
            As TEDxUNJ takes place in Jakarta, we believe it is important to recognize and celebrate the culture that has shaped the city's identity for generations. Betawi culture represents openness, diversity, and resilience values that continue to inspire innovation and meaningful conversations today. By embracing Betawi culture, TEDxUNJ aims to bridge heritage and innovation, tradition and transformation.
          </p>
        </div>
      </div>

      {/* Bottom Rectangle Banner: rectangle1.svg (matching CountdownSection) */}
      <div className="countdown-bottom-rectangle-wrapper">
        <img
          src="/assets/betawi/rectangle1.svg"
          alt="Bottom Rectangle"
          className="countdown-bottom-rectangle-svg"
        />
      </div>
    </section>
  );
}
