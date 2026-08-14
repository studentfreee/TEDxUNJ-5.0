export default function IntroduceSection() {
  return (
    <section id="introduce" className="introduce-section">
      {/* 1. Ornamen Pagar Atas ("balangan" 10 tile strip) */}
      <div className="introduce-top-fence-strip">
        {Array.from({ length: 10 }).map((_, idx) => (
          <img
            key={idx}
            src="/assets/betawi/gigi_balang_fence-58514b.png"
            alt="Balangan Fence"
            className="fence-tile-img"
          />
        ))}
      </div>

      {/* 2. Pola Bunga Background Tiles (4 Tiles Total) */}
      <div className="introduce-floral-pattern-layer">
        <img
          src="/assets/betawi/floral_pattern.png"
          alt="Floral Pattern Far Left"
          className="floral-tile-far-left"
        />
        <img
          src="/assets/betawi/floral_pattern.png"
          alt="Floral Pattern Left"
          className="floral-tile-left"
        />
        <img
          src="/assets/betawi/floral_pattern.png"
          alt="Floral Pattern Right"
          className="floral-tile-right"
        />
        <img
          src="/assets/betawi/floral_pattern.png"
          alt="Floral Pattern Far Right"
          className="floral-tile-far-right"
        />
      </div>

      {/* 3. Starburst Glow (PNG "bintanggg" - 2 instances) */}
      <div className="introduce-starburst-glow glow-top-left">
        <img
          src="/assets/betawi/bintanggg.png"
          alt="Starburst Glow Top Left"
          className="starburst-png-img"
        />
      </div>
      <div className="introduce-starburst-glow glow-bottom-right">
        <img
          src="/assets/betawi/bintanggg.png"
          alt="Starburst Glow Bottom Right"
          className="starburst-png-img"
        />
      </div>

      <div className="introduce-inner">
        {/* 4. Main Section Title: "Introduce" with vector SVG stroke & gradient */}
        <div className="introduce-title-wrapper">
          <svg className="introduce-title-svg-element" viewBox="0 0 500 80">
            <defs>
              <linearGradient id="introduceTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DE2F5A" />
                <stop offset="100%" stopColor="#FDA22F" />
              </linearGradient>
              <filter id="introduceTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
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
              fill="url(#introduceTitleGrad)"
              stroke="#FFFFFF"
              strokeWidth="9.623"
              strokeLinejoin="round"
              paintOrder="stroke fill"
              filter="url(#introduceTitleShadow)"
            >
              Introduce
            </text>
          </svg>
        </div>

        {/* 5. Speech Bubble Card 1: What Is TED? (Tail at bottom-left) */}
        <div className="introduce-speech-card card-ted">
          <img
            src="/assets/betawi/introduce_speech_bubble1.svg"
            alt="Speech Bubble TED"
            className="speech-bubble-svg-bg"
          />
          <div className="speech-card-tail tail-left">
            <svg width="45" height="35" viewBox="0 0 45 35" fill="none">
              <path d="M45 0 L0 35 L22 0 Z" fill="#C764B3" />
            </svg>
          </div>
          <div className="speech-card-content">
            <div className="bubble-title-wrapper">
              <svg className="bubble-title-svg-element" viewBox="0 0 450 55">
                <defs>
                  <linearGradient id="tedCardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DE2F5A" />
                    <stop offset="100%" stopColor="#FDA22F" />
                  </linearGradient>
                  <filter id="tedCardShadow" x="-20%" y="-20%" width="160%" height="160%">
                    <feDropShadow dx="-7.46" dy="14.92" stdDeviation="3.7" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                </defs>
                <text
                  x="0"
                  y="76%"
                  textAnchor="start"
                  fontFamily="'Source Serif 4', Georgia, serif"
                  fontWeight="900"
                  fontSize="42"
                  fill="url(#tedCardGrad)"
                  stroke="#FFFFFF"
                  strokeWidth="7.464"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  filter="url(#tedCardShadow)"
                >
                  What Is TED?
                </text>
              </svg>
            </div>
            <p className="speech-card-text">
              TED is a global community driven by one big idea "Ideas Worth Spreading." It started as a conference about Technology, Entertainment, and Design, and has now grown into a worldwide platform where inspiring people share powerful ideas to change the world.
            </p>
          </div>
        </div>

        {/* 6. Speech Bubble Card 2: What is TEDxUNJ? (Tail at bottom-right) */}
        <div className="introduce-speech-card card-tedxunj">
          <img
            src="/assets/betawi/introduce_speech_bubble2.svg"
            alt="Speech Bubble TEDxUNJ"
            className="speech-bubble-svg-bg"
          />
          <div className="speech-card-tail tail-right">
            <svg width="45" height="35" viewBox="0 0 45 35" fill="none">
              <path d="M0 0 L45 35 L23 0 Z" fill="#C764B3" />
            </svg>
          </div>
          <div className="speech-card-content">
            <div className="bubble-title-wrapper">
              <svg className="bubble-title-svg-element" viewBox="0 0 450 55">
                <defs>
                  <linearGradient id="tedxCardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DE2F5A" />
                    <stop offset="100%" stopColor="#FDA22F" />
                  </linearGradient>
                  <filter id="tedxCardShadow" x="-20%" y="-20%" width="160%" height="160%">
                    <feDropShadow dx="-7.46" dy="14.92" stdDeviation="3.7" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                </defs>
                <text
                  x="0"
                  y="76%"
                  textAnchor="start"
                  fontFamily="'Source Serif 4', Georgia, serif"
                  fontWeight="900"
                  fontSize="42"
                  fill="url(#tedxCardGrad)"
                  stroke="#FFFFFF"
                  strokeWidth="7.464"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  filter="url(#tedxCardShadow)"
                >
                  What is TEDxUNJ?
                </text>
              </svg>
            </div>
            <p className="speech-card-text">
              TEDxUNJ is an official, independently organized TED event run by students at Universitas Negeri Jakarta. We bring together passionate speakers, fresh perspectives, and curious minds to share ideas, spark new conversations, and build a better future together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
