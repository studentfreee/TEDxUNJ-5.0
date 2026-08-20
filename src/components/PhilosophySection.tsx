import { useState } from 'react';

export default function PhilosophySection() {
  // bookState: 0 = Closed Cover, 1 = Learn & Create (learn-create.svg), 2 = Grow (grow.svg)
  const [bookState, setBookState] = useState<number>(0);

  const handleBookClick = () => {
    setBookState((prev) => (prev + 1) % 3);
  };

  return (
    <section id="philosophy" className="philosophy-section">
      {/* Background Vertical Stripes Texture (philosophy_bg_stripes.png) */}
      <div className="philosophy-bg-stripes-layer">
        <img
          src="/assets/betawi/philosophy_bg_stripes.png"
          alt="Background Stripes"
          className="philosophy-bg-stripes-img"
        />
      </div>

      {/* Top Purple Background Overlay SVG (bg-ungu-philospy.svg) */}
      <div className="philosophy-top-bg-ungu">
        <img
          src="/assets/betawi/bg-ungu-philospy.svg"
          alt="Top Background Overlay"
          className="philosophy-top-bg-ungu-img"
        />
      </div>

      {/* Bottom Green Background Overlay SVG (bg-hijau-philosopy.svg) */}
      <div className="philosophy-bottom-bg-hijau">
        <img
          src="/assets/betawi/bg-hijau-philosopy.svg"
          alt="Bottom Background Overlay"
          className="philosophy-bottom-bg-hijau-img"
        />
      </div>

      {/* Bottom Background Overlay SVG (bg-hijau-philosopy.svg) */}
      <img
        src="/assets/betawi/bg-hijau-philosopy.svg"
        alt="Bottom Background Overlay"
        className="philosophy-bottom-rectangle1-strip"
      />

      {/* 2-Layer Responsive Container (1440x1024 Locked Viewport Height) */}
      <div className="philosophy-content">
        {/* Left & Right Header Floral Ornaments (STATIC - ALWAYS IN PLACE) */}
        <img
          src="/assets/betawi/floral_scroll_left.svg"
          alt="Floral Scroll Left"
          className="philosophy-floral-scroll scroll-left"
        />
        <img
          src="/assets/betawi/floral_scroll_right.svg"
          alt="Floral Scroll Right"
          className="philosophy-floral-scroll scroll-right"
        />

        {/* Badge: "TEDx UNJ Presents" (STATIC - ALWAYS IN PLACE) */}
        <div className="philosophy-badge-wrapper">
          <img
            src="/assets/betawi/presents_badge.svg"
            alt="Presents Badge Frame"
            className="presents-badge-bg"
          />
          <div className="badge-inner-content">
            <img src="/assets/betawi/tedx_logo.svg" alt="TEDxUNJ" className="badge-ted-logo" />
            <span className="badge-presents-text">Presents</span>
          </div>
        </div>

        {/* Title: "The Next Chapter" with SVG vector stroke (STATIC - ALWAYS IN PLACE) */}
        <div className="philosophy-title-wrapper">
          <svg className="philosophy-title-svg" viewBox="0 0 600 80">
            <defs>
              <linearGradient id="philosophyTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DE2F5A" />
                <stop offset="100%" stopColor="#FDA22F" />
              </linearGradient>
              <filter id="philosophyTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
                <feDropShadow dx="-9.62" dy="19.24" stdDeviation="4.8" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              fontFamily="'Source Serif 4', Georgia, serif"
              fontWeight="900"
              fontSize="56"
              fill="url(#philosophyTitleGrad)"
              stroke="#FFFFFF"
              strokeWidth="10.5"
              strokeLinejoin="round"
              paintOrder="stroke fill"
              filter="url(#philosophyTitleShadow)"
              className="philosophy-title-text"
            >
              The Next Chapter
            </text>
          </svg>
        </div>

        {/* ==================== 3-STATE BOOK ANIMATION CONTAINER ==================== */}
        <div
          className={`philosophy-interactive-book-stage state-${bookState}`}
          onClick={handleBookClick}
        >
          {/* STATE 0: Closed Cover (philosophy_book_cover.png + logo_31.png) */}
          <div className="book-view-closed">
            <img
              src="/assets/betawi/philosophy_book_cover.png"
              alt="Closed Book"
              className="philosophy-closed-book-img"
            />
            <img
              src="/assets/betawi/logo_31.png"
              alt="Logo 31 Emblem"
              className="philosophy-book-emblem"
            />
          </div>

          {/* STATE 1: Learn & Create SVG (learn-create.svg) */}
          <div className="book-view-learn-create">
            <img
              src="/assets/betawi/learn-create.svg"
              alt="Learn and Create Chapter"
              className="philosophy-open-svg-img"
            />
          </div>

          {/* STATE 2: Grow SVG (grow.svg) */}
          <div className="book-view-grow">
            <img
              src="/assets/betawi/grow.svg"
              alt="Grow Chapter"
              className="philosophy-open-svg-img"
            />
          </div>
        </div>

        {/* ==================== BOTTOM ELEMENTS (FADE OUT WHEN BOOK IS OPEN) ==================== */}
        <div className={`philosophy-bottom-group ${bookState !== 0 ? 'is-hidden' : ''}`}>
          {/* Bottom Subheading: "Every generation has its own chapter." */}
          <div className="philosophy-subheading-wrapper">
            <svg className="philosophy-subheading-svg" viewBox="0 0 750 55">
              <defs>
                <linearGradient id="subheadingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2F5A" />
                  <stop offset="100%" stopColor="#FDA22F" />
                </linearGradient>
                <filter id="subheadingShadow" x="-20%" y="-20%" width="160%" height="160%">
                  <feDropShadow dx="-5.85" dy="11.7" stdDeviation="2.9" floodColor="#000000" floodOpacity="0.25" />
                </filter>
              </defs>
              <text
                x="50%"
                y="72%"
                textAnchor="middle"
                fontFamily="'Source Serif 4', Georgia, serif"
                fontWeight="900"
                fontSize="34"
                fill="url(#subheadingGrad)"
                stroke="#FFFFFF"
                strokeWidth="5.5"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                filter="url(#subheadingShadow)"
                className="philosophy-subheading-text"
              >
                Every generation has its own chapter.
              </text>
            </svg>
          </div>

          {/* Pill Container & Body Text */}
          <div className="philosophy-pill-card">
            <p className="philosophy-body-text">
              In the past, learning happened in classrooms, creating belonged to a few, and growth followed a single path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
