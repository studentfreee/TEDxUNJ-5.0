import React from 'react';

interface AboutPageProps {
  cardsRef: React.RefObject<HTMLDivElement | null>;
  cardsVisible: boolean;
  setSelectedEdition: (id: number) => void;
  activeEdition: {
    id: number;
    name: string;
    date: string;
    theme: string;
    description: string;
    image: string;
  };
  prevEdition: {
    id: number;
    name: string;
    date: string;
    theme: string;
    description: string;
    image: string;
  };
  nextEdition: {
    id: number;
    name: string;
    date: string;
    theme: string;
    description: string;
    image: string;
  };
  activeVideoId: string;
  setActiveVideoId: (id: string) => void;
  youtubeVideos: {
    id: string;
    title: string;
    speaker: string;
    thumbnail: string;
  }[];
  handleHeroMouseMove: (e: React.MouseEvent) => void;
}

export default function AboutPage({
  cardsRef,
  cardsVisible,
  setSelectedEdition,
  activeEdition,
  prevEdition,
  nextEdition,
  activeVideoId,
  setActiveVideoId,
  youtubeVideos,
  handleHeroMouseMove
}: AboutPageProps) {
  return (
    <div className="about-page-wrapper animate-fade-in">
      
      {/* ==================== ABOUT HERO: ABOUT US OVERHAUL ==================== */}
      <section className="about-hero-overhaul section-a-container">
        <div className="kawung-bg" style={{ opacity: 0.18 }}></div>
        <div className="ambient-glow glow-pink" style={{ top: '-10%', left: '10%' }}></div>
        <div className="ambient-glow glow-orange" style={{ bottom: '10%', right: '10%' }}></div>
        
        <div className="about-hero-container">
          <h1 className="about-hero-title">About Us</h1>
        </div>

        {/* Dotted grid matrix overlay for premium texture */}
        <div className="dotted-grid-bg"></div>

        {/* The Balanced 2-Column Modern Comparison Grid */}
        <div className="about-dual-modern-cards" ref={cardsRef}>

          {/* LEFT CARD: TED */}
          <div className={`modern-card card-ted ${cardsVisible ? 'visible' : ''}`}>
            <h2 className="modern-card-title">What Is TED?</h2>
            
            <p className="mission-vision-desc">
              TED, short for <strong>“Technology, Entertainment, and Design”</strong>, is a nonprofit organization established in 1984 to disseminate impactful ideas and knowledge through concise, influential talks.
            </p>
            
            <p className="mission-vision-desc-secondary">
              Embracing the motto <em>“Ideas Worth Spreading”</em>, TED has faithfully followed this mission for over three decades. Its conferences assemble thought leaders, experts, and innovators from diverse domains to exchange insights and experiences on topics spanning science, technology, art, education, and social issues.
            </p>
          </div>

          {/* RIGHT CARD: TEDx */}
          <div 
            className={`modern-card card-tedx ${cardsVisible ? 'visible' : ''}`}
            style={{ transitionDelay: cardsVisible ? '0.15s' : '0s' }}
          >
            <h2 className="modern-card-title">What Is TED<sup>x</sup>?</h2>
            
            <p className="mission-vision-desc">
              TEDx events are independently organized gatherings licensed by TED. They follow a similar format to TED conferences but are organized locally.
            </p>
            
            <p className="mission-vision-desc-secondary">
              These events serve as platforms for communities to convene and exchange ideas through live talks and performances, covering a diverse array of topics intended to stimulate profound discussions and inspire attendees. While TEDx events operate autonomously, they align with TED’s overarching mission of disseminating impactful ideas. Although they are not officially affiliated with TED, TED provides support and guidelines to uphold the integrity of the TEDx brand.
            </p>
          </div>

        </div>
      </section>

      {/* ==================== SECTION B: TIMELINE ==================== */}
      <section className="about-section section-b-container">
        {/* Premium Dot-Matrix Grid texture & ambient glowing auroras */}
        <div className="dotted-grid-bg"></div>
        <div className="ambient-glow glow-pink" style={{ top: '10%', left: '5%', width: '300px', height: '300px', opacity: 0.15 }}></div>
        <div className="ambient-glow glow-orange" style={{ bottom: '15%', right: '5%', width: '300px', height: '300px', opacity: 0.15 }}></div>
        <div className="kawung-bg" style={{ opacity: 0.18 }}></div>
        
        <div className="about-section-title-wrapper">
          <h2 className="about-section-title">Our Journey</h2>
        </div>

        {/* Zine-Style Interactive Carousel Board */}
        <div className="journey-carousel-section">
          
          {/* 3-Card Carousel Track */}
          <div className="journey-carousel-track">
            
            {/* Left Adjacent Card (Grayscale, smaller) */}
            <div 
              className="carousel-photo-card card-prev"
              onClick={() => setSelectedEdition(prevEdition.id)}
            >
              <div className="photo-card-frame">
                <img src={prevEdition.image} alt={prevEdition.name} className="photo-card-img" />
                <div className="photo-card-overlay"></div>
                <span className="adjacent-tag-overlay">{prevEdition.name}</span>
              </div>
            </div>

            {/* Center Spotlight Card (Full Color, larger, offset zine borders) */}
            <div className="carousel-photo-card card-active">
              <div className="photo-card-frame">
                <img src={activeEdition.image} alt={activeEdition.name} className="photo-card-img" />
                <div className="photo-card-overlay"></div>
                <div className="photo-card-decor-lines"></div>
              </div>
            </div>

            {/* Right Adjacent Card (Grayscale, smaller) */}
            <div 
              className="carousel-photo-card card-next"
              onClick={() => setSelectedEdition(nextEdition.id)}
            >
              <div className="photo-card-frame">
                <img src={nextEdition.image} alt={nextEdition.name} className="photo-card-img" />
                <div className="photo-card-overlay"></div>
                <span className="adjacent-tag-overlay">{nextEdition.name}</span>
              </div>
            </div>

          </div>

          {/* Central Horizontal Navigation Controls */}
          <div className="journey-carousel-nav">
            <button 
              className="nav-arrow arrow-left"
              onClick={() => setSelectedEdition(prevEdition.id)}
              aria-label="Edisi Sebelumnya"
            >
              &larr;
            </button>
            
            <span className="nav-active-title">
              {activeEdition.name.toUpperCase()} <span className="nav-active-year">({activeEdition.date.split(' ').pop()})</span>
            </span>
            
            <button 
              className="nav-arrow arrow-right"
              onClick={() => setSelectedEdition(nextEdition.id)}
              aria-label="Edisi Selanjutnya"
            >
              &rarr;
            </button>
          </div>

          {/* Centered Descriptive Content */}
          <div className="journey-carousel-desc-panel animate-fade-in" key={activeEdition.id}>
            <h3 className="desc-theme-title">
              Theme: <span className="theme-text">"{activeEdition.theme}"</span>
            </h3>
            <p className="desc-text">
              {activeEdition.description}
            </p>
          </div>

        </div>
      </section>

      {/* ==================== SECTION C: CURATED YOUTUBE VIDEO THEATER ==================== */}
      <section className="about-section section-c-container" onMouseMove={handleHeroMouseMove}>
        <div className="kawung-bg" style={{ opacity: 0.25 }}></div>
        
        <div className="video-theater-wrapper">
          
          {/* Section Header Title */}
          <h2 className="theater-title">TEDxUNJ Teaser</h2>
          
          {/* Main Theater Spotlight Frame */}
          <div className="theater-spotlight-frame">
            <div className="ambient-glow glow-red" style={{ top: '10%', left: '10%', width: '350px', height: '350px', opacity: 0.18 }}></div>
            <div className="ambient-glow glow-orange" style={{ bottom: '10%', right: '10%', width: '350px', height: '350px', opacity: 0.18 }}></div>
            
            <div className="theater-player-container">
              <iframe
                className="youtube-theater-player"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0&modestbranding=1`}
                title="TEDx Curated Video Spotlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="player-zine-decor"></div>
            </div>
          </div>

          {/* Grid of Interactive Thumbnail Switches */}
          <div className="theater-thumbnails-grid">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className={`theater-thumb-card ${activeVideoId === video.id ? 'active' : ''}`}
                onClick={() => setActiveVideoId(video.id)}
              >
                <div className="thumb-frame">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="thumb-img" 
                  />
                  <div className="thumb-overlay">
                    <span className="play-icon-mini">▶</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
