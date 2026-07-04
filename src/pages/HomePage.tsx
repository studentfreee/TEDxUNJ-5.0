import React, { useState, useEffect } from 'react';
import {
  Flame,
  Sparkles,
  Compass,
  MessageSquare,
  Users,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  scrollProgress: number;
  parallaxOffset: { x: number; y: number };
  handleHeroMouseMove: (e: React.MouseEvent) => void;
  navigate: (path: string) => void;
}

export default function HomePage({
  scrollProgress,
  parallaxOffset,
  handleHeroMouseMove,
  navigate
}: HomePageProps) {
  const [heroActive, setHeroActive] = useState(false);
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // Fire the energetic Big Bang animation immediately on mount!
    setHeroActive(true);
  }, []);

  const cycleDeck = () => {
    setCardOrder(prev => {
      // Pops the top card (at index 3) and moves it to the bottom of the stack (index 0)
      const newOrder = [...prev];
      const topCard = newOrder.pop();
      if (topCard !== undefined) {
        newOrder.unshift(topCard);
      }
      return newOrder;
    });
  };

  return (
    <>
      {/* ==================== SECTION 1: HERO KINETIC ORBIT ==================== */}
      <section
        id="hero"
        className={`section hero-section ${scrollProgress > 0.15 ? 'kinetic-activated' : ''} ${heroActive ? 'hero-animate-active' : ''}`}
        onMouseMove={handleHeroMouseMove}
      >
        {/* Subtle Repeating Batik Kawung Watermark Background */}
        <div className="kawung-bg" style={{ opacity: 0.55 }}></div>

        {/* Drifting Background Starfield Particles */}
        <div className="starfield">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="star star-6"></div>
          <div className="star star-7"></div>
          <div className="star star-8"></div>
        </div>

        {/* Ambient Glows */}
        <div className="ambient-glow glow-pink"></div>
        <div className="ambient-glow glow-orange"></div>

        {/* Under-Orb Typography (Revealed on Scroll) */}
        <div className="reveal-container">
          <div
            className="reveal-inner"
            style={{
              transform: `translateY(${50 - 50 * scrollProgress}px) scale(${0.9 + scrollProgress * 0.1})`,
              opacity: scrollProgress
            }}
          >
            <p className="tagline">
              The Next Chapter
            </p>
            <h1 className="main-title">Redefining How We Learn, Create, & Grow</h1>
            <p className="hero-desc">
              Saksikan pemikiran inovatif, ide yang merubah dunia, dan petualangan intelektual terakbar tahun ini bersama TEDxUNJ 5.0.
            </p>
          </div>

          {/* Parallax Megamendung Clouds SVG Layers */}
          <div
            className="cloud-layer cloud-left"
            style={{ transform: `translate(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px) scale(${1 - scrollProgress * 0.3})`, opacity: 1 - scrollProgress }}
          >
            <svg viewBox="0 0 300 150" width="100%" height="100%">
              <path d="M 50 120 C 20 120, 10 90, 40 70 C 20 60, 40 30, 80 40 C 100 20, 150 30, 160 60 C 190 50, 220 70, 210 100 C 230 110, 220 130, 180 130 Z" fill="url(#cloud-g-left)" opacity="0.85" />
              <path d="M 70 100 C 50 100, 40 80, 60 70 C 50 60, 70 40, 100 50 C 120 30, 150 40, 150 60 C 170 50, 190 70, 180 90 Z" fill="rgba(255,255,255,0.92)" />
              <defs>
                <linearGradient id="cloud-g-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E91E63" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFA726" stopOpacity="0.85" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Parallax Megamendung Clouds SVG Layers */}
          <div
            className="cloud-layer cloud-right"
            style={{ transform: `translate(${-parallaxOffset.x * 0.8}px, ${-parallaxOffset.y * 0.8}px) scale(${1 - scrollProgress * 0.3})`, opacity: 1 - scrollProgress }}
          >
            <svg viewBox="0 0 300 150" width="100%" height="100%">
              <path d="M 50 120 C 20 120, 10 90, 40 70 C 20 60, 40 30, 80 40 C 100 20, 150 30, 160 60 C 190 50, 220 70, 210 100 C 230 110, 220 130, 180 130 Z" fill="url(#cloud-g-right)" opacity="0.85" />
              <path d="M 70 100 C 50 100, 40 80, 60 70 C 50 60, 70 40, 100 50 C 120 30, 150 40, 150 60 C 170 50, 190 70, 180 90 Z" fill="rgba(255,255,255,0.92)" />
              <defs>
                <linearGradient id="cloud-g-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFA726" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#E91E63" stopOpacity="0.85" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Interactive 3D Orbital Idea Sphere Overlay */}
        <div
          className="kinetic-viewport"
          style={{
            transform: `scale(${1 + scrollProgress * 1.2})`,
            opacity: Math.max(1 - scrollProgress * 1.5, 0),
            pointerEvents: scrollProgress > 0.4 ? 'none' : 'auto'
          }}
        >
          {/* Concentric Rotating 3D Rings */}
          <div className="orbital-rings">
            <div className="ring ring-outer"></div>
            <div className="ring ring-middle"></div>
            <div className="ring ring-inner"></div>
          </div>

          {/* Central Glassmorphic Core */}
          <div className="sphere-core">
            <div className="core-inner">
              <span className="logo-ted">TED<sup>x</sup></span>
              <span className="logo-unj">UNJ</span>
              <div className="version-badge">5.0</div>
            </div>
          </div>

          {/* Interactive Floating Thought Nodes */}
          <div className="thought-nodes-container">
            <div
              className="idea-node node-passion"
              style={{ transform: `translate(${parallaxOffset.x * 0.9}px, ${parallaxOffset.y * 0.9}px)` }}
            >
              <div className="node-content">
                <Flame size={20} className="node-icon" />
                <span className="node-tooltip">Passion</span>
              </div>
            </div>

            <div
              className="idea-node node-creativity"
              style={{ transform: `translate(${-parallaxOffset.x * 1.2}px, ${parallaxOffset.y * 0.8}px)` }}
            >
              <div className="node-content">
                <Sparkles size={20} className="node-icon" />
                <span className="node-tooltip">Creativity</span>
              </div>
            </div>

            <div
              className="idea-node node-direction"
              style={{ transform: `translate(${parallaxOffset.x * 0.7}px, ${-parallaxOffset.y * 1.1}px)` }}
            >
              <div className="node-content">
                <Compass size={20} className="node-icon" />
                <span className="node-tooltip">Direction</span>
              </div>
            </div>

            <div
              className="idea-node node-dialogue"
              style={{ transform: `translate(${-parallaxOffset.x * 0.9}px, ${-parallaxOffset.y * 0.9}px)` }}
            >
              <div className="node-content">
                <MessageSquare size={20} className="node-icon" />
                <span className="node-tooltip">Dialogue</span>
              </div>
            </div>

            <div
              className="idea-node node-community"
              style={{ transform: `translate(${parallaxOffset.x * 1.3}px, ${-parallaxOffset.y * 0.6}px)` }}
            >
              <div className="node-content">
                <Users size={20} className="node-icon" />
                <span className="node-tooltip">Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: INTRODUCE TEDxUNJ (Split Layout & Photo Collage) ==================== */}
      <section
        id="introduce"
        className="section intro-section"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Subtle Repeating Batik Kawung lines across background */}
        <div className="kawung-bg" style={{ opacity: 0.45 }}></div>

        {/* Rich and Colorful Pink-to-Lime Background Glows */}
        <div className="ambient-glow glow-pink-stage"></div>
        <div className="ambient-glow glow-lime-stage"></div>

        <div className="section-container">
          <div className="intro-split-container">

            {/* Left Column: Clean, High-Impact Editorial Typography */}
            <div className="intro-editorial-column">
              <span className="intro-badge">Introducing</span>
              <h2 className="intro-huge-title">
                <span className="ted" style={{ color: '#E50914' }}>TED<sup>x</sup></span>
                <span className="unj" style={{ color: 'var(--text-primary)', marginLeft: '6px' }}>UNJ</span>
              </h2>

              <p className="intro-paragraph-text">
                TEDxUNJ is a platform where we can share brilliant ideas with audience in the Jakarta State University environment, to provide new repertoire in social issues, politics, religion, diversity, language, art, culture, and other things that are not limited.
              </p>

              <div className="intro-action-btn-row">
                <button
                  className="pill-button"
                  onClick={() => {
                    navigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  GET TO KNOW US <ArrowRight size={18} className="pill-arrow-icon" />
                </button>
              </div>
            </div>

            {/* Right Column: 3D Glassmorphic Fan Deck */}
            <div className="intro-deck-column">

              {/* 3D Fan Deck Container with dynamic 3D tilt tracking mouse */}
              <div
                className="fan-deck-container"
                style={{
                  transform: `rotateX(${parallaxOffset.y * -0.25}deg) rotateY(${parallaxOffset.x * 0.25}deg)`,
                }}
              >
                {/* Card 1: Passion */}
                <div 
                  className="fan-card card-passion" 
                  style={{ '--index': cardOrder.indexOf(0) } as React.CSSProperties}
                  onClick={cycleDeck}
                >
                  <div className="card-ambient-glow"></div>
                  <div className="card-top-row">
                    <span className="card-category">Core Pillar</span>
                  </div>
                  <div className="card-center-icon">
                    <Flame size={44} className="icon-passion" />
                  </div>
                  <div className="card-info">
                    <h3 className="card-pillar-title">PASSION</h3>
                    <p className="card-pillar-desc">Igniting the sparks of untamed curiosity and deep emotion.</p>
                  </div>
                  <div className="card-glass-stripes"></div>
                </div>

                {/* Card 2: Creativity */}
                <div 
                  className="fan-card card-creativity" 
                  style={{ '--index': cardOrder.indexOf(1) } as React.CSSProperties}
                  onClick={cycleDeck}
                >
                  <div className="card-ambient-glow"></div>
                  <div className="card-top-row">
                    <span className="card-category">Core Pillar</span>
                  </div>
                  <div className="card-center-icon">
                    <Sparkles size={44} className="icon-creativity" />
                  </div>
                  <div className="card-info">
                    <h3 className="card-pillar-title">CREATIVITY</h3>
                    <p className="card-pillar-desc">Breaking structures to design new pathways of expression.</p>
                  </div>
                  <div className="card-glass-stripes"></div>
                </div>

                {/* Card 3: Dialogue */}
                <div 
                  className="fan-card card-dialogue" 
                  style={{ '--index': cardOrder.indexOf(2) } as React.CSSProperties}
                  onClick={cycleDeck}
                >
                  <div className="card-ambient-glow"></div>
                  <div className="card-top-row">
                    <span className="card-category">Core Pillar</span>
                  </div>
                  <div className="card-center-icon">
                    <MessageSquare size={44} className="icon-dialogue" />
                  </div>
                  <div className="card-info">
                    <h3 className="card-pillar-title">DIALOGUE</h3>
                    <p className="card-pillar-desc">Creating deep, mutual resonance through open conversations.</p>
                  </div>
                  <div className="card-glass-stripes"></div>
                </div>

                {/* Card 4: Our Stage (The Photo Card) */}
                <div 
                  className="fan-card card-stage" 
                  style={{ '--index': cardOrder.indexOf(3) } as React.CSSProperties}
                  onClick={cycleDeck}
                >
                  <div className="card-image-wrapper">
                    <img
                      src="/assets/tedx_speaker_stage.png"
                      alt="TEDxUNJ Speaker Stage"
                      className="card-full-image"
                    />
                    <div className="card-image-overlay"></div>
                  </div>
                  <div className="card-top-row stage-overlay-elements">
                    <span className="card-category badge-dark">LIVE EVENT</span>
                  </div>
                  <div className="card-stage-info stage-overlay-elements">
                    <div className="stage-red-pill">TEDxUNJ Stage</div>
                    <h3 className="card-pillar-title">OUR PLATFORM</h3>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: MAIN EVENT ==================== */}
      <section id="main-event" className="section event-section">
        <div className="event-bg-decoration"></div>

        <div className="section-container">

          {/* Section Title Row */}
          <div className="event-title-centered">
            <h2 className="event-bento-title">Main Event</h2>
          </div>

          {/* Center Map Layout */}
          <div className="event-center-map-layout">
            <div className="center-map-wrapper">
              {/* Decorative Elements */}
              <div className="map-deco-circle"></div>
              <div className="map-deco-dots"></div>

              {/* The Map */}
              <div className="center-map-frame">
                <iframe
                  title="Lokasi TEDxUNJ"
                  src="https://maps.google.com/maps?q=Universitas%20Negeri%20Jakarta&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="center-map-iframe"
                ></iframe>
              </div>

              {/* Tilted Footers (When & Where) */}
              <div className="map-footers">
                
                {/* WHEN */}
                <div className="tilted-footer footer-when">
                  <div className="footer-label">WHEN</div>
                  <div className="footer-content">
                    <span className="footer-big-text">12 SEP 2026</span>
                    <span className="footer-sub-text">Sabtu, 08:30 WIB</span>
                  </div>
                </div>

                {/* WHERE */}
                <div className="tilted-footer footer-where">
                  <div className="footer-label">WHERE</div>
                  <div className="footer-content">
                    <span className="footer-big-text">Auditorium UNJ</span>
                    <span className="footer-sub-text">Kampus A, Jakarta Timur</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
