import React from 'react';
import AboutFooter from '../components/AboutFooter';

export default function AboutPage() {
  return (
    <div className="about-page-wrapper animate-fade-in">

      {/* ==================== OUR JOURNEY: POLAROID GALLERY SECTION ==================== */}
      <section className="our-journey-section">
        {/* Mask group container from Figma (Node #375:49 & #375:50) */}
        <div className="journey-mask-group mask-group" id="journey-mask-group" aria-hidden="true">
          {/* Background layer from Figma (IMG_9720 2, Node #383:108) */}
          <div
            className="journey-bg-img img-9720-2"
            id="img-9720-2"
            aria-hidden="true"
          />
        </div>

        {/* Top Betawi Gigi Balang Decorative Canopy */}
        <img
          src="/journey/journey_canopy.png"
          alt="Top Gigi Balang Canopy"
          className="journey-top-decor group-383-110 desain-tanpa-judul-9-1"
          id="desain-tanpa-judul-9-1"
          aria-hidden="true"
        />

        {/* Top Atmosphere Gradient Overlay */}
        <div className="journey-top-gradient rectangle-729" id="rectangle-729" aria-hidden="true" />

        {/* Bottom Atmosphere Gradient Overlay */}
        <div className="journey-bottom-gradient rectangle-446" id="rectangle-446" aria-hidden="true" />

        <div className="journey-stage">
          {/* Section Main Title */}
          <div className="journey-title-container">
            <svg
              viewBox="0 0 460 96"
              className="journey-title-svg"
              aria-label="Our Journey"
            >
              <defs>
                <linearGradient id="journeyTitleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2F5A" />
                  <stop offset="99.99%" stopColor="#FDA22F" />
                </linearGradient>
                <filter id="journeyTitleDropShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-6" dy="12" stdDeviation="6" floodColor="rgba(0, 0, 0, 0.28)" />
                </filter>
              </defs>
              <text
                x="50%"
                y="70"
                textAnchor="middle"
                className="journey-svg-title-text"
                filter="url(#journeyTitleDropShadow)"
              >
                Our Journey
              </text>
            </svg>
          </div>

          {/* 8 Polaroid Cards Positioned with exact Figma Collage Coordinates */}
          <div className="journey-cards-container">
            {/* Card 1 (Top Left) - rot: -12.39deg */}
            <div
              className="polaroid-card card-top card-top-1"
              style={{ '--card-base-rot': '-12.39deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-top">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/_DSC1575 (1) 1.png" alt="Speaker presentation" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 2 (Top Mid-Left) - rot: 8.73deg */}
            <div
              className="polaroid-card card-top card-top-2"
              style={{ '--card-base-rot': '8.73deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-top">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/DSCF1252 1.png" alt="Stage performer" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 3 (Top Mid-Right) - rot: -5.83deg */}
            <div
              className="polaroid-card card-top card-top-3"
              style={{ '--card-base-rot': '-5.83deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-top">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/TOP09817 1.png" alt="Speaker talking" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 4 (Top Right) - rot: 6.73deg */}
            <div
              className="polaroid-card card-top card-top-4"
              style={{ '--card-base-rot': '6.73deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-top">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/IMG_0192 1.png" alt="Audience group" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Cards */}
            {/* Card 5 (Bottom Left) - rot: -6.49deg */}
            <div
              className="polaroid-card card-bottom card-bottom-1"
              style={{ '--card-base-rot': '-6.49deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-bottom">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/IMG_9720 1.png" alt="TEDx UNJ stage team" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 6 (Bottom Mid-Left) - rot: 5.62deg */}
            <div
              className="polaroid-card card-bottom card-bottom-2"
              style={{ '--card-base-rot': '5.62deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-bottom">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/IMG_0199 1.png" alt="Speaker on stage" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 7 (Bottom Mid-Right) - rot: -8.42deg */}
            <div
              className="polaroid-card card-bottom card-bottom-3"
              style={{ '--card-base-rot': '-8.42deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-bottom">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/DSCF1383 1.png" alt="Speaker sharing thoughts" className="polaroid-img" />
                </div>
              </div>
            </div>

            {/* Card 8 (Bottom Right) - rot: 11.95deg */}
            <div
              className="polaroid-card card-bottom card-bottom-4"
              style={{ '--card-base-rot': '11.95deg' } as React.CSSProperties}
            >
              <div className="polaroid-frame frame-bottom">
                <div className="polaroid-img-wrapper">
                  <img src="/journey/_DSC1641 1.png" alt="Keynote speaker" className="polaroid-img" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Emotional Caption */}
          <div className="journey-caption-container">
            <svg
              viewBox="0 0 1060 110"
              className="journey-caption-svg"
              aria-label="Beyond the stage and the spotlight"
            >
              <defs>
                <linearGradient id="journeyCaptionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2A59" />
                  <stop offset="44.71%" stopColor="#DE2A59" />
                  <stop offset="100%" stopColor="#FD8A2F" />
                </linearGradient>
                <filter id="journeyCaptionDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="-4" dy="8" stdDeviation="4" floodColor="rgba(0, 0, 0, 0.25)" />
                </filter>
              </defs>
              <text
                x="50%"
                y="42"
                textAnchor="middle"
                className="journey-svg-caption-text"
                filter="url(#journeyCaptionDropShadow)"
              >
                Beyond the stage and the spotlight. capturing the raw energy,
              </text>
              <text
                x="50%"
                y="90"
                textAnchor="middle"
                className="journey-svg-caption-text"
                filter="url(#journeyCaptionDropShadow)"
              >
                connections, and inspiring conversations across our journey
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== SECTION B2: OUR TEAM ==================== */}
      <section className="our-team-section">
        {/* Background Atmosphere Layers */}
        <div className="team-bg-mask"></div>
        <div className="team-top-gradient rectangle-446-team" id="rectangle-446-team" aria-hidden="true"></div>
        <div className="team-bottom-wave"></div>

        {/* Fluid Canvas Stage */}
        <div className="our-team-canvas">
          {/* Main Glass Panel Container */}
          <div className="team-glass-container">
            {/* Unified 3-Column Native Grid */}
            <div className="team-grid">
              {/* Row 1, Col 1: Section Title */}
              <div className="team-grid-title-cell">
                <svg
                  viewBox="0 0 350 90"
                  className="team-title-svg"
                  aria-label="Our Team"
                >
                  <defs>
                    <linearGradient id="teamTitleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DE2F5A" />
                      <stop offset="100%" stopColor="#FDA22F" />
                    </linearGradient>
                    <filter id="teamTitleShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="-6" dy="12" stdDeviation="6" floodColor="rgba(0, 0, 0, 0.25)" />
                    </filter>
                  </defs>
                  <text
                    x="20"
                    y="65"
                    className="team-title-svg-text"
                    filter="url(#teamTitleShadow)"
                  >
                    Our Team
                  </text>
                </svg>
              </div>

              {/* Row 1, Col 2 & 3: Executive Board Card */}
              <div className="team-card team-card-exec-board">
                <img
                  src="/team/divisi/executive-board.png"
                  alt="Executive Board"
                  className="team-card-img"
                />
                <span className="sr-only">Executive Board</span>
              </div>

              {/* Row 2, Col 1: Executive Producer */}
              <div className="team-card team-card-ep">
                <img
                  src="/team/divisi/executive-producer.png"
                  alt="Executive Producer"
                  className="team-card-img"
                />
                <span className="sr-only">Executive Producer</span>
              </div>

              {/* Row 2, Col 2: Curator */}
              <div className="team-card team-card-curator">
                <img
                  src="/team/divisi/curator.png"
                  alt="Curator"
                  className="team-card-img"
                />
                <span className="sr-only">Curator</span>
              </div>

              {/* Row 2, Col 3: Sponsorship & Business Development */}
              <div className="team-card team-card-sponsorship">
                <img
                  src="/team/divisi/sponsorship-business-development.png"
                  alt="Sponsorship & Business Development"
                  className="team-card-img"
                />
                <span className="sr-only">Sponsorship & Business Development</span>
              </div>

              {/* Row 3, Col 1: Creative & Digital */}
              <div className="team-card team-card-creative">
                <img
                  src="/team/divisi/creative-digital.png"
                  alt="Creative & Digital"
                  className="team-card-img"
                />
                <span className="sr-only">Creative & Digital</span>
              </div>

              {/* Row 3, Col 2: Stagehands */}
              <div className="team-card team-card-stagehands">
                <img
                  src="/team/divisi/stagehands.png"
                  alt="Stagehands"
                  className="team-card-img"
                />
                <span className="sr-only">Stagehands</span>
              </div>

              {/* Row 3, Col 3: Marketing & Media */}
              <div className="team-card team-card-marketing">
                <img
                  src="/team/divisi/marketing-media.png"
                  alt="Marketing & Media"
                  className="team-card-img"
                />
                <span className="sr-only">Marketing & Media</span>
              </div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="team-caption-container">
            <svg
              viewBox="0 0 914 84"
              className="team-caption-svg"
              aria-label="Great ideas don't happen by chance"
            >
              <defs>
                <linearGradient id="teamCaptionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2A59" />
                  <stop offset="44.71%" stopColor="#DE2A59" />
                  <stop offset="100%" stopColor="#FD8A2F" />
                </linearGradient>
                <filter id="teamCaptionDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="-4.362" dy="8.725" stdDeviation="2.181" floodColor="rgba(0, 0, 0, 0.25)" />
                </filter>
              </defs>
              <text
                x="50%"
                y="32"
                textAnchor="middle"
                className="team-svg-caption-text"
                filter="url(#teamCaptionDropShadow)"
              >
                Great ideas don't happen by chance. Meet the passionate individuals
              </text>
              <text
                x="50%"
                y="72"
                textAnchor="middle"
                className="team-svg-caption-text"
                filter="url(#teamCaptionDropShadow)"
              >
                who brainstorm, build, and bring every detail to life behind the scenes
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== SECTION B3: OUR SUPPORTERS ==================== */}
      <section className="our-supporters-section">
        {/* Background Atmosphere Layers */}
        <div className="supporters-bg-image" />

        {/* Top Betawi Gigi Balang Canopy */}
        <img
          src="/journey/journey_canopy.png"
          alt="Betawi Gigi Balang Canopy"
          className="journey-top-decor group-383-110 desain-tanpa-judul-9-1 supporters-top-decor"
          aria-hidden="true"
        />

        {/* Scaled Canvas Stage */}
        <div className="our-supporters-canvas">
          {/* LOGO26 (Stroke) - Flanking Left Wing */}
          <img
            src="/sponsor/logo_stroke_wing_left.svg"
            alt=""
            aria-hidden="true"
            className="supporters-stroke-wing-left"
          />

          {/* LOGO26 (Stroke) - Flanking Right Wing */}
          <img
            src="/sponsor/logo_stroke_wing_right.svg"
            alt=""
            aria-hidden="true"
            className="supporters-stroke-wing-right"
          />

          {/* Header Pill: "Our Supporters" */}
          <div className="supporters-header-outer">
            <div className="supporters-header-inner">
              <svg
                viewBox="0 0 520 80"
                className="supporters-title-svg"
                aria-label="Our Supporters"
              >
                <defs>
                  <linearGradient id="supportersTitleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DE2F5A" />
                    <stop offset="100%" stopColor="#FDA22F" />
                  </linearGradient>
                  <filter id="supportersTitleShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="-6" dy="12" stdDeviation="5" floodColor="rgba(0, 0, 0, 0.25)" />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="56"
                  textAnchor="middle"
                  className="supporters-title-text"
                  filter="url(#supportersTitleShadow)"
                >
                  Our Supporters
                </text>
              </svg>
            </div>
          </div>

          {/* Main Card */}
          <div className="supporters-main-outer rectangle-734">
            <div className="supporters-main-inner rectangle-735">

              {/* Sub-Header: "Sponsors & Partners" */}
              <div className="supporters-subtitle-container">
                <svg
                  viewBox="0 0 500 68"
                  className="supporters-subtitle-svg"
                  aria-label="Sponsors & Partners"
                >
                  <defs>
                    <linearGradient id="sponsorsTitleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DE2A59" />
                      <stop offset="45%" stopColor="#DE2A59" />
                      <stop offset="100%" stopColor="#FD8A2F" />
                    </linearGradient>
                    <filter id="sponsorsTitleShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="6.5" stdDeviation="3.8" floodColor="rgba(0, 0, 0, 0.42)" />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="47"
                    textAnchor="middle"
                    className="sponsors-subtitle-text"
                    filter="url(#sponsorsTitleShadow)"
                  >
                    Sponsors &amp; Partners
                  </text>
                </svg>
              </div>

              {/* 3-Row Native Supporters Logo Grid */}
              <div className="supporters-logos-grid">

                {/* Row 1: Commercial Sponsors */}
                <div className="supporters-row row-sponsors">
                  <div className="supporter-logo-item logo-marina">
                    <img src="/sponsor/marina.png?v=figma3" alt="Marina" className="supporter-img supporter-img-marina" />
                  </div>

                  <div className="supporter-logo-item logo-inez">
                    <img src="/sponsor/inez.png?v=figma3" alt="inez" className="supporter-img supporter-img-inez" />
                  </div>

                  <div className="supporter-logo-item logo-bikinmemori">
                    <img src="/sponsor/bikinmemori.png?v=figma3" alt="Bikin Memori" className="supporter-img supporter-img-bikinmemori" />
                  </div>
                </div>

                {/* Row 2: Media Partners */}
                <div className="supporters-row row-media">
                  <div className="supporter-logo-item logo-sdgs">
                    <img src="/sponsor/sdgs.png?v=figma3" alt="UI SDGs Summit 2026" className="supporter-img supporter-img-sdgs" />
                  </div>

                  <div className="supporter-logo-item logo-teaterzat">
                    <img src="/sponsor/teaterzat.png?v=figma3" alt="Teater Zat" className="supporter-img supporter-img-teaterzat" />
                  </div>

                  <div className="supporter-logo-item logo-sigmatv">
                    <img src="/sponsor/sigmatv.png?v=figma3" alt="Sigma TV UNJ" className="supporter-img supporter-img-sigmatv" />
                  </div>

                  <div className="supporter-logo-item logo-rawself">
                    <img src="/sponsor/rawself.png?v=figma3" alt="Raw Self Universe" className="supporter-img supporter-img-rawself" />
                  </div>
                </div>

                {/* Row 3: Community & Student Organizations */}
                <div className="supporters-row row-community">
                  <div className="supporter-logo-item logo-kspm">
                    <img src="/sponsor/kspm.png?v=figma3" alt="KSPM FEB UI" className="supporter-img supporter-img-kspm" />
                  </div>

                  <div className="supporter-logo-item logo-dedikasi">
                    <img src="/sponsor/dedikasi.png?v=figma3" alt="Dedikasi Project" className="supporter-img supporter-img-dedikasi" />
                  </div>

                  <div className="supporter-logo-item logo-bemfeb">
                    <img src="/sponsor/bemfeb.png?v=figma3" alt="BEM FEB UNJ" className="supporter-img supporter-img-bemfeb" />
                  </div>

                  <div className="supporter-logo-item logo-aiesec">
                    <img src="/sponsor/aiesec.png?v=figma3" alt="AIESEC in UNJ" className="supporter-img supporter-img-aiesec" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <AboutFooter />

    </div>
  );
}
