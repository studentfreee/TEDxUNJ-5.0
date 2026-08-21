import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Award,
  Users,
  Camera,
  Music,
  Gift,
  Armchair
} from 'lucide-react';

interface EventPageProps {
  addToCart?: (type: 'single' | 'double' | 'triple') => void;
  ticketTypes?: any;
}

interface Speaker {
  id: string;
  name: string;
  role: string;
  photo: string;
  svgAsset?: string;
  popupAsset?: string;
  bio: string;
  talkTitle: string;
  time: string;
}

export default function EventPage({ addToCart: _addToCart, ticketTypes: _ticketTypes }: EventPageProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const speakersData: Speaker[] = [
    {
      id: 'speaker-1',
      name: 'Ajeng Asmarandhany',
      role: 'Education Innovator & Youth Advocate',
      photo: '/assets/bilgates.webp',
      svgAsset: '/assets/betawi/speaker-ajeng.svg',
      popupAsset: '/assets/betawi/popup-speaker-ajeng.svg',
      talkTitle: 'Empowering Next-Gen Learners in Digital Era',
      time: '09:30 - 10:15 WIB',
      bio: 'Prominent educational leader and speaker sharing inspiring insights on empowerment and youth development.'
    },
    {
      id: 'speaker-2',
      name: 'Ayu Sara Herlia',
      role: 'Global Scholar & Content Creator',
      photo: '/assets/xaviera.jpeg',
      svgAsset: '/assets/betawi/speaker-ayu.svg',
      popupAsset: '/assets/betawi/popup-speaker-ayu.svg',
      talkTitle: 'Bridging Cultural Horizons & Creative Media',
      time: '10:30 - 11:15 WIB',
      bio: 'Computer science scholar and content creator passionate about empowering youth to excel globally.'
    },
    {
      id: 'speaker-3',
      name: 'Rossa Farahdiba',
      role: 'Creative Entrepreneur & Tech Strategist',
      photo: '/assets/timoty.jpg',
      svgAsset: '/assets/betawi/speaker-rossa.svg',
      popupAsset: '/assets/betawi/popup-speaker-rossa.svg',
      talkTitle: 'Redefining Wealth & Creative Economies for Gen Z',
      time: '13:00 - 13:45 WIB',
      bio: 'Leading creative entrepreneur fostering financial literacy and career acceleration for young generations.'
    },
    {
      id: 'speaker-4',
      name: 'Dr. Muhammad Faisal',
      role: 'Youth Culture Specialist & Sociologist',
      photo: '/assets/bilgates.webp',
      svgAsset: '/assets/betawi/speaker-faisal.svg',
      popupAsset: '/assets/betawi/popup-speaker-faisal.svg',
      talkTitle: 'Understanding Youth Dynamics & Social Evolution',
      time: '14:00 - 14:45 WIB',
      bio: 'Sociologist and youth culture specialist researching Indonesian generational evolution and social impact.'
    },
    {
      id: 'speaker-5',
      name: 'To Be Announced',
      role: 'To Be Announced',
      photo: '',
      svgAsset: '/assets/betawi/to-be-anounced.svg',
      popupAsset: '',
      talkTitle: 'To Be Announced',
      time: '15:00 - 15:45 WIB',
      bio: 'Speaker details will be announced soon.'
    },
    {
      id: 'speaker-6',
      name: 'To Be Announced',
      role: 'To Be Announced',
      photo: '',
      svgAsset: '/assets/betawi/to-be-anounced1.svg',
      popupAsset: '',
      talkTitle: 'To Be Announced',
      time: '16:00 - 16:45 WIB',
      bio: 'Speaker details will be announced soon.'
    }
  ];

  const benefitsData = [
    {
      id: 'b1',
      title: 'Inspiring Talks',
      image: '/assets/betawi/ispiring-talk.png',
      icon: <Sparkles size={20} />
    },
    {
      id: 'b2',
      title: 'Live Performances',
      image: '/assets/betawi/live-performance.png',
      icon: <Music size={20} />
    },
    {
      id: 'b3',
      title: 'Photobooth Area',
      image: '/assets/betawi/fotoboth-area.png',
      icon: <Camera size={20} />
    },
    {
      id: 'b4',
      title: 'Networking Session',
      image: '/assets/betawi/network-session.png',
      icon: <Users size={20} />
    },
    {
      id: 'b5',
      title: 'Interactive Tasks & Giveaways',
      image: '/assets/betawi/interaktif-task.png',
      icon: <Gift size={20} />
    },
    {
      id: 'b6',
      title: 'Official E-Certificate',
      image: '/assets/betawi/official-certificate.png',
      icon: <Award size={20} />
    },
    {
      id: 'b7',
      title: 'Comfortable Auditorium Seating',
      image: '/assets/betawi/comfortable-seating.png',
      icon: <Armchair size={20} />
    }
  ];

  // Handle Keyboard Escape key to close modal & Trap focus for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedSpeaker) {
        setSelectedSpeaker(null);
      }
    };

    if (selectedSpeaker) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedSpeaker]);

  return (
    <div className="event-page-container">
      {/* ==========================================
         SECTION 1: MASKOT & LOGO (Node 33:31)
         ========================================== */}
      <section id="event-mascot-section" className="event-sec1-mascot">
        {/* Background Batik Motif Layer (bg-event.svg) */}
        <img
          src="/assets/betawi/bg-event.svg"
          alt="Event Hero Background Motif"
          className="event-hero-batik-bg"
        />
        {/* Flanking Monas SVGs */}
        <img
          src="/assets/betawi/monas.svg"
          alt="Monas Left"
          className="event-monas event-monas--left"
        />
        <img
          src="/assets/betawi/monas.svg"
          alt="Monas Right"
          className="event-monas event-monas--right"
        />

        {/* Top Gigi Balang Crown Trim Asset (balang-event.svg) */}
        <img
          src="/assets/betawi/balang-event.svg"
          alt="Gigi Balang Crown Trim"
          className="event-top-crown-svg"
        />

        {/* Bottom Flower & Fence Decoration Asset (bunga-hero.svg) */}
        <img
          src="/assets/betawi/bunga-hero.svg"
          alt="Bunga Betawi Hero Decoration"
          className="event-hero-flowers-svg"
        />

        <div className="event-sec1-inner">

          {/* Central Hero Mascot & X-Leaf Emblem Cluster with Speech Bubble Overlays */}
          <div className="event-mascot-cluster">
            <div className="mascot-img-wrapper">
              <img
                src="/assets/betawi/bawi-teks.svg"
                alt="BAWI Speech Bubble"
                className="event-bawi-teks-speech"
              />
              <img
                src="/assets/betawi/mascot_bawi.png"
                alt="BAWI Mascot"
                className="event-mascot-bawi"
              />
            </div>
            <div className="emblem-img-wrapper">
              <img
                src="/assets/betawi/logo_31.png"
                alt="TEDx X-Leaf Emblem"
                className="event-x-emblem"
              />
              <img
                src="/assets/betawi/logo-teks.svg"
                alt="Logo Speech Bubble"
                className="event-logo-teks-speech"
              />
            </div>
          </div>

          {/* Ornate Frame Asset "tedxunj.svg" */}
          <div className="event-badge-svg-wrapper">
            <img
              src="/assets/betawi/tedxunj.svg"
              alt="TEDxUNJ 5.0 Badge"
              className="event-badge-svg"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
         SECTION 2: SPEAKER LIST + POPUP DETAIL (Node 96:2107 + 96:2330)
         ========================================== */}
      <section id="event-speakers-section" className="event-sec2-speakers">
        {/* Dedicated Bottom Betawi Pager Row Layer (pager1.svg - 24 units) */}
        <div className="event-sec2-pager-row">
          {Array.from({ length: 24 }).map((_, idx) => (
            <img
              key={idx}
              src="/assets/betawi/pager1.svg"
              alt="Betawi Pagar"
              className="event-sec2-pager-unit"
            />
          ))}
        </div>

        {/* Top Left Watermark: countdown_logo_watermark.svg */}
        <div className="countdown-top-left-watermark">
          <img src="/assets/betawi/countdown_logo_watermark.svg" alt="Countdown Logo Watermark Left" className="top-left-watermark-img" />
        </div>

        {/* Top Right Watermark: countdown_logo_watermark.svg (mirrored) */}
        <div className="countdown-top-right-watermark">
          <img src="/assets/betawi/countdown_logo_watermark.svg" alt="Countdown Logo Watermark Right" className="top-right-watermark-img" />
        </div>

        {/* Background Floral Pattern Tiles Layer */}
        <div className="event-sec2-floral-pattern">
          <img
            src="/assets/betawi/floral_pattern.png"
            alt="Floral Pattern Background"
            className="event-floral-tile"
          />
          <img
            src="/assets/betawi/floral_pattern.png"
            alt="Floral Pattern Background"
            className="event-floral-tile"
          />
          <img
            src="/assets/betawi/floral_pattern.png"
            alt="Floral Pattern Background"
            className="event-floral-tile"
          />
          <img
            src="/assets/betawi/floral_pattern.png"
            alt="Floral Pattern Background"
            className="event-floral-tile"
          />
        </div>

        <div className="event-sec2-inner">
          {/* Section Title SVG: "meet-speaker.svg" */}
          <div className="event-sec2-title-wrapper">
            <img
              src="/assets/betawi/meet-speaker.svg"
              alt="Meet Our Speakers!"
              className="event-sec2-title-svg"
            />
          </div>

          {/* 6 Speaker Window Frame SVG Grid (2 rows x 3 columns) */}
          <div className="speakers-window-grid-6">
            {speakersData.map((speaker) => {
              const hasPopup = Boolean(speaker.popupAsset);
              return (
                <div
                  key={speaker.id}
                  className={`speaker-svg-card ${!hasPopup ? 'no-popup' : ''}`}
                  onClick={() => {
                    if (hasPopup) {
                      setSelectedSpeaker(speaker);
                    }
                  }}
                  role={hasPopup ? 'button' : 'article'}
                  tabIndex={hasPopup ? 0 : -1}
                  onKeyDown={(e) => {
                    if (hasPopup && (e.key === 'Enter' || e.key === ' ')) {
                      setSelectedSpeaker(speaker);
                    }
                  }}
                >
                  <img
                    src={speaker.svgAsset || '/assets/betawi/speaker-maudy.svg'}
                    alt={speaker.name}
                    className="speaker-maudy-svg-img"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE DETAIL POPUP MODAL (popup-speaker.svg) */}
        {selectedSpeaker && (
          <div
            className="speaker-modal-backdrop"
            onClick={() => setSelectedSpeaker(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-speaker-name"
          >
            <div
              className="speaker-popup-svg-wrapper"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              {/* Popup Speaker SVG Asset */}
              <img
                src={selectedSpeaker.popupAsset || '/assets/betawi/popup-speaker.svg'}
                alt={`Detail ${selectedSpeaker.name}`}
                className="speaker-popup-svg-img"
              />
            </div>
          </div>
        )}

        {/* Bottom gradient rectangle transition wrapper (rectangle-event1.svg in front of pager1) */}
        <div className="event-sec2-bottom-rect-wrapper">
          <img
            src="/assets/betawi/rectangle-event1.svg"
            alt="Bottom Rectangle"
            className="event-sec2-bottom-rect"
          />
        </div>
      </section>

      {/* ==========================================
         SECTION 3A: VENUE - MAIN EVENT (Node 36:73)
         ========================================== */}
      <section id="event-venue-section" className="event-sec3a-venue">
        {/* Background Image: Auditorium Photo */}
        <img src="/assets/venue_bg_auditorium.png" alt="" className="sec3a-bg-img" />

        {/* LOGO26 Watermarks (4 corners) */}
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-tl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-tr" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-bl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-br" />

        {/* Bottom Gradient Overlay (transition to next section) */}
        <div className="sec3a-bottom-gradient"></div>

        <div className="event-sec3a-inner">
          {/* Main Event Title SVG */}
          <div className="sec-title-container">
            <img
              src="/assets/betawi/main-event.svg"
              alt="Main Event"
              className="main-event-title-svg"
            />
          </div>

          <div className="main-event-content-row">
            {/* Left: SVG Frame (perpus.svg) + Photo + Venue SVG Label */}
            <div className="venue-photo-container">
              <div className="venue-svg-frame-wrapper">
                <img
                  src="/assets/betawi/perpus.svg"
                  alt="Perpustakaan Nasional"
                  className="venue-bg-perpus-svg"
                />
              </div>
              <div className="venue-name-pill-svg-wrapper">
                <img
                  src="/assets/betawi/button-perpus.svg"
                  alt="Perpustakaan Nasional"
                  className="venue-name-pill-svg"
                />
              </div>
            </div>

            {/* Right: Info Pill SVGs (Separated into 2 elements: Lokasi & Tanggal) */}
            <div className="venue-info-pills-col">
              <div className="venue-info-pill-svg-wrapper venue-info-pill-loc">
                <div className="venue-pill-crop-box top-pill">
                  <img
                    src="/assets/betawi/button-lok-tgl.svg"
                    alt="Auditorium 2nd floor"
                    className="venue-info-pill-svg"
                  />
                </div>
              </div>
              <div className="venue-info-pill-svg-wrapper venue-info-pill-date">
                <div className="venue-pill-crop-box bottom-pill">
                  <img
                    src="/assets/betawi/button-lok-tgl.svg"
                    alt="21 November 2026"
                    className="venue-info-pill-svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         SECTION 3B: VENUE - FIND YOUR WAY (Figma Node 129:624)
         ========================================== */}
      <section id="event-sec3b-findway" className="event-sec3b-findway">
        {/* Background Building Image */}
        <img
          src="/assets/perpusnas_building.png"
          alt=""
          className="sec3b-bg-building"
        />
        <div className="sec3b-bg-gradient-overlay"></div>

        {/* LOGO26 Watermarks (4 corners) */}
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3b-watermark sec3b-wm-tl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3b-watermark sec3b-wm-tr" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3b-watermark sec3b-wm-bl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3b-watermark sec3b-wm-br" />

        <div className="event-sec3b-inner">
          {/* Section Title SVG: find-away.svg */}
          <div className="sec-title-container">
            <img
              src="/assets/betawi/find-away.svg"
              alt="Find Your Way!"
              className="findway-title-svg"
            />
          </div>

          <div className="findway-content-row">
            {/* Left Column: Public Transport SVG & Parking Area SVG */}
            <div className="findway-cards-col">
              <div className="findway-card-svg-wrapper">
                <img
                  src="/assets/betawi/public-transport.svg"
                  alt="Public Transport"
                  className="findway-card-svg"
                />
              </div>

              <div className="findway-card-svg-wrapper findway-parking-wrapper">
                <img
                  src="/assets/betawi/parking-area.svg"
                  alt="Parking Area"
                  className="findway-card-svg"
                />
              </div>
            </div>

            {/* Right Column: Rectangle Maps Frame + Embed Map */}
            <div className="findway-map-container">
              <img
                src="/assets/betawi/rectangle-maps.svg"
                alt=""
                className="findway-map-border-svg"
              />
              <div className="findway-map-inner-frame">
                <iframe
                  title="Google Maps Location Perpustakaan Nasional RI"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.621255535974!2d106.82483867586717!3d-6.181419793806085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4326f54c93d%3A0x673e3bc2145b2f0a!2sNational%20Library%20of%20the%20Republic%20of%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  style={{ border: 0, width: '100%', height: '100%' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="findway-map-iframe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer Guideline Text SVG: final-vanue.svg */}
          <div className="findway-footer-svg-wrapper">
            <img
              src="/assets/betawi/final-vanue.svg"
              alt="Final venue details and access guidelines will be officially updated"
              className="findway-footer-svg"
            />
          </div>
        </div>

        {/* Bottom Rectangle Banner: rectangle1.svg */}
        <div className="countdown-bottom-rectangle-wrapper">
          <img src="/assets/betawi/rectangle1.svg" alt="Bottom Rectangle" className="countdown-bottom-rectangle-svg" />
        </div>
      </section>

      {/* ==========================================
         SECTION 4: WHAT WILL YOU GET (Node 67:33)
         ========================================== */}
      <section id="event-benefits-section" className="event-sec4-benefits">
        <img src="/assets/betawi/bg-menu.svg" alt="" className="sec4-bg-menu-svg" />

        {/* Top Purple Frame Banner: rectangle-ungu.svg */}
        <div className="sec4-top-rectangle-wrapper">
          <img src="/assets/betawi/rectangle-ungu.svg" alt="" className="sec4-top-rectangle-svg" />
        </div>

        {/* Full Section Green Frame Banner: rectagnle-hijau.svg */}
        <div className="sec4-hijau-rectangle-wrapper">
          <img src="/assets/betawi/rectagnle-hijau.svg" alt="" className="sec4-hijau-rectangle-svg" />
        </div>

        {/* LOGO26 Watermarks (4 corners like Section 3A, with top-left and top-right customized) */}
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec4-wm-tl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec4-wm-tr" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-bl" />
        <img src="/assets/betawi/logo26_stroke.svg" alt="" className="sec3a-watermark sec3a-wm-br" />

        <div className="event-sec4-inner">
          {/* Section Title Header SVG: what-get.svg */}
          <div className="sec-title-container">
            <img
              src="/assets/betawi/what-get.svg"
              alt="What will you get?"
              className="sec4-title-svg"
            />
          </div>

          {/* 7 Interactive Benefit Cards (Top Row: 4 cards, Bottom Row: 3 cards) */}
          <div className="benefits-cards-wrapper">
            {/* Top Row: 4 Cards */}
            <div className="benefits-row benefits-row-top">
              {benefitsData.slice(0, 4).map((item) => (
                <div key={item.id} className="benefit-glass-card">
                  <img src={item.image} alt={item.title} className="benefit-card-photo" />
                  <div className="benefit-card-duotone-overlay"></div>
                  <div className="benefit-card-gradient-vignette"></div>
                  <div className="benefit-card-caption-container">
                    <h3 className="benefit-card-title title-back" data-text={item.title}>
                      {item.title}
                    </h3>
                    <h3 className="benefit-card-title title-front">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 3 Cards */}
            <div className="benefits-row benefits-row-bottom">
              {benefitsData.slice(4, 7).map((item) => (
                <div key={item.id} className="benefit-glass-card">
                  <img src={item.image} alt={item.title} className="benefit-card-photo" />
                  <div className="benefit-card-duotone-overlay"></div>
                  <div className="benefit-card-gradient-vignette"></div>
                  <div className="benefit-card-caption-container">
                    <h3 className="benefit-card-title title-back" data-text={item.title}>
                      {item.title}
                    </h3>
                    <h3 className="benefit-card-title title-front">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Rectangle Banner: rectangle1.svg */}
        <div className="countdown-bottom-rectangle-wrapper">
          <img src="/assets/betawi/rectangle1.svg" alt="Bottom Rectangle" className="countdown-bottom-rectangle-svg" />
        </div>
      </section>

      {/* ==========================================
         SECTION 5: TICKETING & BUNDLING (Node 138:391)
         ========================================== */}
      <section id="event-comingsoon-section" className="event-sec5-comingsoon">
        {/* Background Batik Motif Layer (bg-event.svg) */}
        <img
          src="/assets/betawi/bg-event.svg"
          alt="Event Hero Background Motif"
          className="event-hero-batik-bg"
        />

        {/* Flanking Monas SVGs */}
        <img
          src="/assets/betawi/monas.svg"
          alt="Monas Left"
          className="event-monas event-monas--left"
        />
        <img
          src="/assets/betawi/monas.svg"
          alt="Monas Right"
          className="event-monas event-monas--right"
        />

        {/* Top Gigi Balang Crown Trim Asset (balang-event.svg) */}
        <img
          src="/assets/betawi/balang-event.svg"
          alt="Gigi Balang Crown Trim"
          className="event-top-crown-svg"
        />

        {/* Bottom Flower & Fence Decoration Asset (bunga-hero.svg) */}
        <img
          src="/assets/betawi/bunga-hero.svg"
          alt="Bunga Betawi Hero Decoration"
          className="event-hero-flowers-svg"
        />

        <div className="event-sec1-inner sec5-inner-override">
          {/* Section 5 Title SVG: ticketing-bundling.svg */}
          <div className="sec-title-container sec5-title-container">
            <img
              src="/assets/betawi/ticketing-bundling.svg"
              alt="Ticketing & Bundling"
              className="sec5-title-svg"
            />
          </div>

          {/* Section 5 Content SVG: comingsoon.svg */}
          <div className="sec5-comingsoon-svg-wrapper">
            <img
              src="/assets/betawi/comingsoon.svg"
              alt="Coming Soon"
              className="sec5-comingsoon-svg"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
         SECTION 6: STANDALONE EVENT FOOTER
         ========================================== */}
      <footer className="event-standalone-footer">
        {/* Bottom Pink Fade Strip (rectangle.svg) */}
        <img
          src="/assets/betawi/rectangle.svg"
          alt=""
          className="contact-bottom-rectangle-strip"
        />

        <div className="footer-panel event-page-footer-card">
          <div className="footer-panel-left">
            <div className="footer-brand">
              <span className="footer-brand-title">
                <span className="brand-ted">TED<sup>x</sup></span> UNJ 5.0
              </span>
            </div>
            <div className="footer-socials">
              <img
                src="/assets/betawi/icon-social.svg"
                alt="Social Media Links"
                className="footer-social-svg"
              />
            </div>
          </div>

          <div className="footer-legal">
            <p className="legal-line">&copy;2025 All Rights Reserved</p>
            <p className="legal-line">This independent TEDx event is operated</p>
            <p className="legal-line">under license from TED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
