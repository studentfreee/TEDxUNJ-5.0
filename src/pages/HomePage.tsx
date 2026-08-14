import React, { useState, useEffect } from 'react';
import CountdownSection from '../components/CountdownSection';
import IntroduceSection from '../components/IntroduceSection';
import PhilosophySection from '../components/PhilosophySection';
import TableOfContentsSection from '../components/TableOfContentsSection';
import ContactFooterSection from '../components/ContactFooterSection';

interface HomePageProps {
  scrollProgress: number;
  parallaxOffset: { x: number; y: number };
  handleHeroMouseMove: (e: React.MouseEvent) => void;
  navigate: (path: string) => void;
}

export default function HomePage({
  handleHeroMouseMove,
  navigate
}: HomePageProps) {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [mascotError, setMascotError] = useState(false);

  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Cross-Device Interactive Scroll Lock: Lock scrolling on Desktop, Tablet & Mobile when door is closed
  useEffect(() => {
    if (!isWindowOpen) {
      document.body.classList.add('door-is-locked');
      document.documentElement.classList.add('door-is-locked');
    } else {
      document.body.classList.remove('door-is-locked');
      document.documentElement.classList.remove('door-is-locked');
    }

    return () => {
      document.body.classList.remove('door-is-locked');
      document.documentElement.classList.remove('door-is-locked');
    };
  }, [isWindowOpen]);

  return (
    <div className="tedx-landing-page">
      {/* ==================== SECTION 1: BETAWI HERITAGE HERO ==================== */}
      <section
        id="hero"
        className="betawi-hero-section"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Batik Background Layer (Direct Figma Rendered PNG) */}
        <img src="/assets/betawi/batik-hero-figma.png" alt="Batik Hero Background" className="betawi-batik-bg" />

        {/* Outer Background Elements (Outside inner wrapper to span full screen width) */}
        <img src="/assets/betawi/gigi_balang_fence-58514b.png" alt="Gigi Balang" className="betawi-gigi-balang" />
        <img src="/assets/betawi/balustrade-kiri.png" alt="Pagar Kiri" className="betawi-balustrade-left" />
        <img src="/assets/betawi/balustrade-kanan.png" alt="Pagar Kanan" className="betawi-balustrade-right" />
        <img src="/assets/betawi/rectangle1.svg" alt="Bottom Gradient" className="betawi-bottom-fade" />

        {/* Inner Content Wrapper: aspect-ratio 1440/1024 */}
        <div className={`betawi-hero-inner ${isWindowOpen ? 'is-open' : ''}`}>
          {/* Background Landmark Layers */}
          <img src="/assets/betawi/ground_union.svg" alt="Ground" className="betawi-ground" />
          <img src="/assets/betawi/monas.svg" alt="Monas" className="betawi-monas" />

          {/* 3D Betawi Window Stage */}
          <div
            className={`betawi-window-stage ${isWindowOpen ? 'is-open' : ''}`}
            onClick={() => setIsWindowOpen(!isWindowOpen)}
          >
            {/* 1. Full Master Window Frame (Includes Arch Glass 10-panes, Frame, Sill & Grill Bars) */}
            <img src="/assets/betawi/door-full3.svg" alt="Betawi Window Frame" className="window-frame-master" />

            {/* 2. Interactive 3D Animated Door Leaves */}
            <div className="door-container-left">
              <img src="/assets/betawi/daun1.svg" alt="Gerbang Kiri" className="door-leaf-img" />
            </div>
            <div className="door-container-right">
              <img src="/assets/betawi/daun1.svg" alt="Gerbang Kanan" className="door-leaf-img" style={{ transform: 'scaleX(-1)' }} />
            </div>

            {/* 3. Reveal Content inside Window Frame (Mascot Ondel-Ondel BAWI) */}
            <div className="window-reveal-content">
              {!mascotError ? (
                <img
                  src="/assets/betawi/mascot_bawi.png"
                  alt="Maskot Ondel-Ondel BAWI"
                  className="mascot-bawi"
                  onError={() => setMascotError(true)}
                />
              ) : (
                <div className="mascot-fallback">
                  <div className="mascot-face">
                    <div className="eyes">
                      <div className="eye"></div>
                      <div className="eye"></div>
                    </div>
                    <div className="smile"></div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Interactive Pulsating Transparent Circle on Door Sill */}
            <div className={`betawi-pulse-circle ${isWindowOpen ? 'is-open' : ''}`}>
              <div className="circle-inner"></div>
            </div>
          </div>

          {/* Headlines Animated SVG Typography */}
          <img
            src="/assets/betawi/welcome-to.svg"
            alt="Welcome To"
            className={`hero-svg-welcome ${isWindowOpen ? 'is-open' : ''}`}
          />
          <img
            src="/assets/betawi/next-chapter.svg"
            alt="The Next Chapter!"
            className={`hero-svg-chapter ${isWindowOpen ? 'is-open' : ''}`}
          />
          <img
            src="/assets/betawi/redevining.svg"
            alt="Redefining how we learn, create and grow"
            className={`hero-svg-subtitle ${isWindowOpen ? 'is-open' : ''}`}
          />

          {/* Bottom Fade Gradient Overlay */}
          <img src="/assets/betawi/rectangle1.svg" alt="Betawi Bottom Overlay" className="betawi-bottom-fade" />
        </div>
      </section>

      {/* ==================== SECTION 2: COUNTDOWN TIMER ==================== */}
      <CountdownSection />

      {/* ==================== SECTION 3: INTRODUCE TEDxUNJ ==================== */}
      <IntroduceSection />

      {/* ==================== SECTION 4: PHILOSOPHY & THEME (FLIP BOOK) ==================== */}
      <PhilosophySection />

      {/* ==================== SECTION 5: TABLE OF CONTENTS (MENU SCROLL) ==================== */}
      <TableOfContentsSection navigate={navigate} />

      {/* ==================== SECTION 6: CONTACT & FOOTER COMBINED ==================== */}
      <ContactFooterSection />
    </div>
  );
}
