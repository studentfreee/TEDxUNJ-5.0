import React, { useState } from 'react';

interface TableOfContentsSectionProps {
  navigate?: (path: string) => void;
}

export default function TableOfContentsSection({ navigate }: TableOfContentsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { num: '01', title: 'Introduce', targetId: 'introduce' },
    { num: '02', title: 'Our Theme', targetId: 'philosophy' },
    { num: '03', title: 'Event', targetId: 'introduce', path: '/event' },
    { num: '04', title: 'Merch', targetId: 'introduce', path: '/event' },
    { num: '05', title: 'Ticket', targetId: 'introduce', path: '/event' },
    { num: '06', title: 'Partnership', targetId: 'contact', path: '/partner' }
  ];

  const handleMenuClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    e.stopPropagation();
    if (item.path && navigate) {
      navigate(item.path);
    } else {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section id="toc" className="toc-section">
      {/* Background Menu Pattern SVG Layer (bg-menu.svg) */}
      <div className="toc-bg-menu-layer">
        <img
          src="/assets/betawi/bg-menu.svg"
          alt="Menu Background Pattern"
          className="toc-bg-menu-img"
        />
      </div>

      {/* Top Pink Fade Overlay (Pure CSS Linear Gradient matching Figma Node 2:440) */}
      <div className="toc-top-pink-fade"></div>

      {/* Left & Right Watermark Ornaments (Anchored to Outer Viewport Edges - Symmetrical 208px SVG) */}
      <img
        src="/assets/betawi/toc-watermark-kiri.svg"
        alt="Watermark Kiri"
        className="toc-watermark-left-img"
      />
      <img
        src="/assets/betawi/toc-watermark-kiri.svg"
        alt="Watermark Kanan"
        className="toc-watermark-right-img"
      />

      {/* 2-Layer Responsive Container (1440x1024 Locked Viewport Height) */}
      <div className={`toc-content ${isOpen ? 'is-open' : 'is-closed'}`}>

        {/* Bottom Right Star Glow (Figma Node 2:254) */}
        <img
          src="/assets/betawi/toc_bintang_glow.svg"
          alt="Star Glow"
          className="toc-bintang-glow-img"
        />
        
        {/* State 0 (Closed) Elements */}
        {/* Closed Scroll Graphic */}
        <div className="toc-closed-scroll-wrapper" onClick={handleToggle}>
          <img
            src="/assets/betawi/menu_closed_scroll.png"
            alt="Closed Scroll"
            className="toc-closed-scroll-img"
          />
        </div>

        {/* Center Mascot (State 0 Only) */}
        <div className="toc-center-mascot-wrapper" onClick={handleToggle}>
          <img
            src="/assets/betawi/mascot_bawi.png"
            alt="BAWI Mascot"
            className="toc-center-mascot-img"
          />
        </div>

        {/* Quote Text (State 0 Only) */}
        <div className="toc-quote-wrapper">
          <img
            src="/assets/betawi/every-chapter.svg"
            alt="Every chapter begins with a choice."
            className="toc-quote-svg-img"
          />
        </div>


        {/* State 1 (Open) Elements */}
        {/* Unrolled Scroll Graphic (ScaleY vertical animation) */}
        <div className="toc-unrolled-scroll-stage">
          <div className="toc-unrolled-scroll-container" onClick={handleToggle}>
            <img
              src="/assets/betawi/gulungan-terbuka2.svg"
              alt="Unrolled Paper Scroll"
              className="toc-unrolled-scroll-img"
            />

            {/* Content Overlays ON TOP of Paper Surface */}
            <div className="toc-scroll-overlay-content">
              {/* Title: Table of Contents */}
              <h2 className="toc-open-title">Table of Contents</h2>

              {/* 6 Menu Items in Dot-Leader format */}
              <div className="toc-dot-leader-list">
                {menuItems.map((item) => (
                  <button
                    key={item.num}
                    className="toc-dot-leader-item"
                    onClick={(e) => handleMenuClick(e, item)}
                  >
                    <span className="dot-leader-num">{item.num}</span>
                    <span className="dot-leader-line"></span>
                    <span className="dot-leader-title">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flanking Mascots (State 1 Only) */}
        <div className="toc-flanking-mascot mascot-left" onClick={handleToggle}>
          <img
            src="/assets/betawi/mascot_bawi.png"
            alt="BAWI Mascot Left"
            className="toc-flanking-mascot-img"
          />
        </div>
        <div className="toc-flanking-mascot mascot-right" onClick={handleToggle}>
          <img
            src="/assets/betawi/mascot_bawi.png"
            alt="BAWI Mascot Right"
            className="toc-flanking-mascot-img"
          />
        </div>

        {/* Speech Bubble with Pointy Tail (State 1 Only, Right Side next to Right Mascot) */}
        <div className="toc-speech-bubble-wrapper">
          <img
            src="/assets/betawi/choose_chapter_bubble.svg"
            alt="Choose Your Chapter Bubble Frame"
            className="toc-speech-bubble-bg"
          />
          <img
            src="/assets/betawi/chose-you-chapter.svg"
            alt="Choose your chapter!"
            className="toc-speech-bubble-svg-img"
          />
        </div>

      </div>
    </section>
  );
}
