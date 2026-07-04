import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingCart,
  Flame,
  Sparkles,
  Compass,
  Users,
  Clock,
  X
} from 'lucide-react';

interface EventPageProps {
  addToCart: (type: 'single' | 'double' | 'triple') => void;
  ticketTypes: {
    single: { id: string; name: string; price: number; desc: string };
    double: { id: string; name: string; price: number; desc: string };
    triple: { id: string; name: string; price: number; desc: string };
  };
}

export default function EventPage({ addToCart, ticketTypes }: EventPageProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any | null>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const speakersData = [
    {
      id: 'gates',
      name: 'Bill Gates',
      role: 'Microsoft Co-Founder & Philanthropist',
      time: '09:30 - 10:15 WIB',
      talk: 'The Future of Innovation & Global Philanthropy',
      bio: 'A technology pioneer, philanthropist, and business leader. Through the Gates Foundation, he focuses on global health, development, education, and fighting climate change.',
      color: 'hsl(342, 85%, 65%)',
      bgGradient: 'linear-gradient(135deg, hsl(342, 85%, 96%) 0%, hsl(25, 95%, 95%) 100%)',
      image: '/assets/bilgates.webp',
      icon: <Sparkles size={22} />,
      instagram: 'https://instagram.com/thisisbillgates',
      linkedin: 'https://linkedin.com/in/williamhgates'
    },
    {
      id: 'xaviera',
      name: 'Xaviera Putri',
      role: 'Global Student & Content Creator',
      time: '10:30 - 11:15 WIB',
      talk: 'Bridging Borders: Navigating Global Education & Creative Spaces',
      bio: 'A prominent Indonesian student studying in South Korea who shares insights about education, technology, and cross-cultural learning, inspiring millions of young minds to grow globally.',
      color: 'hsl(25, 95%, 65%)',
      bgGradient: 'linear-gradient(135deg, hsl(25, 95%, 96%) 0%, hsl(85, 75%, 95%) 100%)',
      image: '/assets/xaviera.jpeg',
      icon: <Flame size={22} />,
      instagram: 'https://instagram.com/xavieraputri',
      linkedin: 'https://linkedin.com/in/xavieraputri'
    },
    {
      id: 'timothy',
      name: 'Timothy Ronald',
      role: 'Financial Educator & Entrepreneur',
      time: '13:00 - 13:45 WIB',
      talk: 'Rethinking Wealth: Building the Creative Economy for Next Gen',
      bio: 'A leading financial educator and entrepreneur in Indonesia, empowering youth with financial literacy and exploring new pathways in the digital creative economy.',
      color: 'hsl(85, 75%, 60%)',
      bgGradient: 'linear-gradient(135deg, hsl(85, 75%, 95%) 0%, hsl(205, 85%, 95%) 100%)',
      image: '/assets/timoty.jpg',
      icon: <Compass size={22} />,
      instagram: 'https://instagram.com/timothyronald',
      linkedin: 'https://linkedin.com/in/timothyronald'
    },
    {
      id: 'yudo',
      name: 'Dr. Yudo Prasetyo',
      role: 'Smart City & Geospatial Innovator',
      time: '14:00 - 14:45 WIB',
      talk: 'Mapping the Future: Smart Cities and Tech-Driven Communities',
      bio: 'An expert in geospatial technology and smart city design, researching how mapping and spatial data can revolutionize community development, green infrastructure, and urban planning.',
      color: 'hsl(275, 70%, 65%)',
      bgGradient: 'linear-gradient(135deg, hsl(275, 70%, 96%) 0%, hsl(342, 85%, 96%) 100%)',
      image: '/assets/yudo.webp',
      icon: <Users size={22} />,
      instagram: 'https://instagram.com/yudoprasetyo',
      linkedin: 'https://linkedin.com/in/yudoprasetyo'
    }
  ];

  return (
    <div className="event-page-wrapper animate-fade-in">
      {/* ==================== SECTION 1: EVENT HERO (THEME & DESCRIPTION) ==================== */}
      <section className="event-hero section animate-fade-in">
        <div className="kawung-bg" style={{ opacity: 0.05 }}></div>
        <div className="ambient-glow glow-pink" style={{ top: '-15%', left: '5%', width: '550px', height: '550px', opacity: 0.15 }}></div>
        <div className="ambient-glow glow-orange" style={{ bottom: '-15%', right: '5%', width: '550px', height: '550px', opacity: 0.15 }}></div>
        
        <div className="event-hero-canvas-layout">
          {/* Left Side: Dramatic Typography Cluster (Pushed higher) */}
          <div className="event-hero-editorial-panel shifted-upwards">
            <h1 className="event-hero-theme-headline">
              THE NEXT <br />
              <span className="gradient-theme-title">CHAPTER</span>
            </h1>
            
            <p className="event-hero-theme-description">
              TEDxUNJ 5.0 carries the theme <strong>“The Next Chapter: Redefining How We Learn, Create, and Grow.”</strong> This theme is chosen to reflect the beginning of a new era where creativity, education, and the economy continue to evolve alongside the rapid development of technology and society. Through this theme, TEDxUNJ aims to spread inspiring ideas that encourage individuals to rethink the way they learn, create opportunities, and grow in an ever-changing world.
            </p>
          </div>

          {/* Right Side: Interactive Typographic Bento Canvas (No Logos) */}
          <div className="event-hero-visual-horizon">
            <div className="kinetic-bento-matrix-container">
              {/* Pillar 1: LEARN */}
              <div className="kinetic-matrix-card bento-learn animate-float-slow">
                <div className="matrix-card-glow"></div>
                <div className="matrix-card-header">
                  <span className="card-num">01</span>
                  <span className="card-status">ACTIVE</span>
                </div>
                <h3 className="matrix-title">LEARN</h3>
                <p className="matrix-desc">Redefining perspectives through collaborative intellectual evolution.</p>
              </div>

              {/* Pillar 2: CREATE */}
              <div className="kinetic-matrix-card bento-create animate-float-medium">
                <div className="matrix-card-glow"></div>
                <div className="matrix-card-header">
                  <span className="card-num">02</span>
                  <span className="card-status">ACTIVE</span>
                </div>
                <h3 className="matrix-title">CREATE</h3>
                <p className="matrix-desc">Fostering breakthrough ideas at the intersection of tech & society.</p>
              </div>

              {/* Pillar 3: GROW */}
              <div className="kinetic-matrix-card bento-grow animate-float-fast">
                <div className="matrix-card-glow"></div>
                <div className="matrix-card-header">
                  <span className="card-num">03</span>
                  <span className="card-status">ACTIVE</span>
                </div>
                <h3 className="matrix-title">GROW</h3>
                <p className="matrix-desc">Expanding positive societal footprints and creative economies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: SPEAKER LINEUP TIMELINE (OVERHAULED!) ==================== */}
      <section className="event-speakers-section section">
        <div className="kawung-bg" style={{ opacity: 0.08 }}></div>
        <div className="section-container">
          <div className="event-section-title-wrapper text-center">
            <h2 className="speakers-main-title section-title-giant">Speaker Lineup</h2>
          </div>

          <div 
            ref={timelineRef}
            className={`timeline-cards-container ${timelineVisible ? 'animate-active' : ''}`}
          >
            {speakersData.map((speaker, index) => (
              <div 
                key={speaker.id} 
                className={`timeline-speaker-card ${index % 2 === 0 ? 'normal-direction' : 'reverse-direction'}`}
                style={{ 
                  '--accent-color': speaker.color, 
                  background: speaker.bgGradient,
                  '--delay': index
                } as React.CSSProperties}
              >
                {/* Image Section */}
                <div className="timeline-card-image-box">
                  <img src={speaker.image} alt={speaker.name} className="timeline-card-img" />
                </div>

                {/* Info Content Section */}
                <div className="timeline-card-info-box">
                  <div className="session-capsule-badge-box">
                    <span className="session-capsule-badge-time">
                      <Clock size={13} className="mr-1 inline align-middle" style={{ marginTop: '-2px' }} /> {speaker.time}
                    </span>
                  </div>

                  <h3 className="timeline-card-speaker-name">{speaker.name}</h3>
                  <p className="timeline-card-role-label">{speaker.role}</p>
                  
                  <div className="timeline-card-talk-theme">
                    <span className="theme-quote">“</span>
                    <span className="theme-title-text">{speaker.talk}</span>
                    <span className="theme-quote">”</span>
                  </div>

                  {/* Clean and thin elegant View Detail action */}
                  <button 
                    className="btn-view-detail-editorial"
                    onClick={() => setSelectedSpeaker(speaker)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE PROFILE MODAL POPUP ==================== */}
      {selectedSpeaker && (
        <div className="speaker-modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="speaker-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="speaker-modal-close-btn" onClick={() => setSelectedSpeaker(null)}>
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              {/* Left Column: Photo */}
              <div className="modal-photo-column">
                <img 
                  src={selectedSpeaker.image} 
                  alt={selectedSpeaker.name} 
                  className="modal-speaker-img" 
                  style={{ borderColor: selectedSpeaker.color }}
                />
              </div>

              {/* Right Column: Bio Details & Social Connect */}
              <div className="modal-details-column">
                <span className="modal-role-pill" style={{ backgroundColor: `${selectedSpeaker.color}15`, color: selectedSpeaker.color, borderColor: selectedSpeaker.color }}>
                  {selectedSpeaker.role}
                </span>
                <h3 className="modal-speaker-name">{selectedSpeaker.name}</h3>
                <p className="modal-talk-time">Session: {selectedSpeaker.time}</p>
                
                <h4 className="modal-talk-headline">"{selectedSpeaker.talk}"</h4>
                
                <div className="modal-bio-card">
                  <p className="modal-bio-text">{selectedSpeaker.bio}</p>
                </div>

                <div className="modal-socials-row">
                  <span className="connect-label">Connect:</span>
                  <div className="socials-buttons">
                    <a 
                      href={selectedSpeaker.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn instagram-btn"
                      aria-label="Instagram Profile"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 inline align-middle" style={{ marginTop: '-2px' }}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg> Instagram
                    </a>
                    <a 
                      href={selectedSpeaker.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn linkedin-btn"
                      aria-label="LinkedIn Profile"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 inline align-middle" style={{ marginTop: '-2px' }}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== SECTION 4: TICKET STORE SECTION ==================== */}
      <section id="ticket-store-section" className="event-tickets-section section">
        <div className="kawung-bg" style={{ opacity: 0.08 }}></div>
        <div className="section-container">
          <div className="event-section-title-wrapper text-center">
            <h2 className="tickets-main-title section-title-giant">Get Your Ticket</h2>
          </div>

          <div className="tickets-grid">
            {/* Single Ticket */}
            <div className="ticket-card card-single-ticket">
              <div className="ticket-card-badge">POPULAR</div>
              <div className="ticket-card-header">
                <h3 className="ticket-name">Single Ticket</h3>
                <p className="ticket-description">{ticketTypes.single.desc}</p>
              </div>
              <div className="ticket-price-box">
                <span className="currency">Rp</span>
                <span className="price">75.000</span>
                <span className="per">/ pax</span>
              </div>
              <div className="ticket-perks">
                <ul>
                  <li>✓ 1x Akses Masuk Utama</li>
                  <li>✓ Goodie Bag Eksklusif</li>
                  <li>✓ E-Certificate</li>
                  <li>✓ Coffee Break & Lunch</li>
                </ul>
              </div>
              <button 
                className="btn-add-to-cart btn-single"
                onClick={() => addToCart('single')}
              >
                <ShoppingCart size={16} className="mr-2 inline align-middle" /> Add to Cart
              </button>
            </div>

            {/* Double Ticket */}
            <div className="ticket-card card-double-ticket">
              <div className="ticket-card-badge discount">10% OFF</div>
              <div className="ticket-card-header">
                <h3 className="ticket-name">Double Ticket</h3>
                <p className="ticket-description">{ticketTypes.double.desc}</p>
              </div>
              <div className="ticket-price-box">
                <span className="currency">Rp</span>
                <span className="price">135.000</span>
                <span className="per">/ 2 pax</span>
              </div>
              <div className="ticket-perks">
                <ul>
                  <li>✓ 2x Akses Masuk Utama</li>
                  <li>✓ 2x Goodie Bag Eksklusif</li>
                  <li>✓ 2x E-Certificate</li>
                  <li>✓ 2x Coffee Break & Lunch</li>
                </ul>
              </div>
              <button 
                className="btn-add-to-cart btn-double"
                onClick={() => addToCart('double')}
              >
                <ShoppingCart size={16} className="mr-2 inline align-middle" /> Add to Cart
              </button>
            </div>

            {/* Triple Ticket */}
            <div className="ticket-card card-triple-ticket">
              <div className="ticket-card-badge discount">13% OFF</div>
              <div className="ticket-card-header">
                <h3 className="ticket-name">Triple Ticket</h3>
                <p className="ticket-description">{ticketTypes.triple.desc}</p>
              </div>
              <div className="ticket-price-box">
                <span className="currency">Rp</span>
                <span className="price">195.000</span>
                <span className="per">/ 3 pax</span>
              </div>
              <div className="ticket-perks">
                <ul>
                  <li>✓ 3x Akses Masuk Utama</li>
                  <li>✓ 3x Goodie Bag Eksklusif</li>
                  <li>✓ 3x E-Certificate</li>
                  <li>✓ 3x Coffee Break & Lunch</li>
                </ul>
              </div>
              <button 
                className="btn-add-to-cart btn-triple"
                onClick={() => addToCart('triple')}
              >
                <ShoppingCart size={16} className="mr-2 inline align-middle" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
