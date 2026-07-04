import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  Menu,
  Trash2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import PartnerPage from './pages/PartnerPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation states
  const [activeMenu, setActiveMenu] = useState('home');

  // Selected edition for Section B timeline (1.0 to 5.0)
  const [selectedEdition, setSelectedEdition] = useState(5);

  // Scroll progress for Hero scattering & About parallax effects (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax coordinates for floating nodes, elements, and cursor tracking
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // State for curated YouTube videos theater in Section C
  const [activeVideoId, setActiveVideoId] = useState("iCvmsMzlF7o");
  const youtubeVideos = [
    {
      id: "iCvmsMzlF7o",
      title: "The Power of Vulnerability",
      speaker: "Brené Brown",
      thumbnail: "https://img.youtube.com/vi/iCvmsMzlF7o/hqdefault.jpg"
    },
    {
      id: "qp0HIF3SfI4",
      title: "How Great Leaders Inspire Action",
      speaker: "Simon Sinek",
      thumbnail: "https://img.youtube.com/vi/qp0HIF3SfI4/hqdefault.jpg"
    },
    {
      id: "iG9CE55wbtY",
      title: "Do Schools Kill Creativity?",
      speaker: "Sir Ken Robinson",
      thumbnail: "https://img.youtube.com/vi/iG9CE55wbtY/hqdefault.jpg"
    }
  ];

  // Shopping Cart System & Checkout States
  const [cartItems, setCartItems] = useState<{ type: string; qty: number; price: number; name: string }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ name: '', email: '', institution: '' });
  const [generatedPass, setGeneratedPass] = useState<any>(null);

  const ticketTypes = {
    single: { id: 'single', name: 'Single Ticket', price: 75000, desc: 'Tiket reguler untuk 1 orang' },
    double: { id: 'double', name: 'Double Ticket', price: 135000, desc: 'Paket hemat untuk 2 orang (diskon 10%)' },
    triple: { id: 'triple', name: 'Triple Ticket', price: 195000, desc: 'Paket grup untuk 3 orang (diskon 13%)' }
  };

  const addToCart = (type: 'single' | 'double' | 'triple') => {
    const ticket = ticketTypes[type];
    setCartItems(prev => {
      const existing = prev.find(item => item.type === type);
      if (existing) {
        return prev.map(item => item.type === type ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { type, qty: 1, price: ticket.price, name: ticket.name }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (type: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(type);
      return;
    }
    setCartItems(prev => prev.map(item => item.type === type ? { ...item, qty: newQty } : item));
  };

  const removeFromCart = (type: string) => {
    setCartItems(prev => prev.filter(item => item.type !== type));
  };

  const getCartTotalQty = () => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  };

  const getCartTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  };

  // Scroll-triggered visibility for comparison cards in Section A
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset visibility state on route changes
    if (location.pathname !== '/about') {
      setCardsVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    // Timeout fallback to ensure visibility if observer fails
    const timer = setTimeout(() => {
      if (cardsRef.current) {
        observer.observe(cardsRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  // Handle Scroll to animate Hero scattering & highlight sticky header links
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1) of the hero section
      const progress = Math.min(Math.max(scrollY / (viewportHeight * 0.95), 0), 1);
      setScrollProgress(progress);

      // Highlight active menu item based on current section on Home page
      if (location.pathname === '/') {
        const sections = ['hero', 'introduce', 'main-event'];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.3) {
              setActiveMenu(sectionId === 'hero' ? 'home' : sectionId === 'introduce' ? 'about' : 'event');
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle Mousemove in Hero/About Section for dynamic parallax depth
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;
    setParallaxOffset({
      x: mouseX * 40,
      y: mouseY * 30
    });
  };







  // Timeline database
  const editions = [
    {
      id: 1,
      name: "TEDxUNJ 1.0",
      date: "Maret 2021",
      theme: "Manifesting True Colors",
      description: "Diinisiasi oleh 4 mahasiswa Fakultas Bahasa dan Seni untuk menampilkan keberagaman latar belakang mahasiswa UNJ dan memupuk toleransi lintas budaya.",
      image: "/assets/tedx_team_collaboration.png"
    },
    {
      id: 2,
      name: "TEDxUNJ 2.0",
      date: "September 2023",
      theme: "Empowering the Future: Nurturing the World through the Smallest Aspects Around Us",
      description: "Mengeksplorasi gagasan bahwa perubahan dunia dimulai dari kepedulian terhadap aspek terkecil dan terdekat di sekeliling kita untuk membangun dampak berkelanjutan.",
      image: "/assets/tedx_art_performance.png"
    },
    {
      id: 3,
      name: "TEDxUNJ 3.0",
      date: "September 2024",
      theme: "Future Horizon",
      description: "Mempelajari sinergi integratif antara disrupsi teknologi, metodologi pendidikan modern, dan kemandirian pemberdayaan manusia yang harmonis.",
      image: "/assets/tedx_networking_hub.png"
    },
    {
      id: 4,
      name: "TEDxUNJ 4.0",
      date: "November 2025",
      theme: "Hack the Future",
      description: "Memberikan panduan adaptasi dan inovasi karir lewat kacamata psikologi sosial, tren teknologi digital, dan akselerasi karir masa kini.",
      image: "/assets/tedx_discussion_panel.png"
    },
    {
      id: 5,
      name: "TEDxUNJ 5.0",
      date: "2026",
      theme: "The Next Chapter",
      description: "Edisi termutakhir bertajuk 'The Next Chapter' yang melambangkan kebangkitan kolaboratif untuk merintis solusi dan babak baru penyebaran ide-ide brilian.",
      image: "/assets/tedx_audience_applause.png"
    }
  ];

  const getPrevEdition = () => {
    const prevId = selectedEdition === 1 ? 5 : selectedEdition - 1;
    return editions.find(e => e.id === prevId)!;
  };

  const getNextEdition = () => {
    const nextId = selectedEdition === 5 ? 1 : selectedEdition + 1;
    return editions.find(e => e.id === nextId)!;
  };

  const activeEdition = editions.find(e => e.id === selectedEdition)!;
  const prevEdition = getPrevEdition();
  const nextEdition = getNextEdition();

  return (
    <>
      {/* Header & Sticky Glassmorphism Navigation */}
      <header className="header">
        <div className="header-container">
          {/* Left Side: Hamburger Menu Button */}
          <div className="header-left">
            <button
              className="menu-trigger-btn"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka Menu"
            >
              <Menu size={20} className="menu-icon-bars" />
              <span className="menu-trigger-text">Menu</span>
            </button>
          </div>

          {/* Center Side: Centered TEDxUNJ Logo */}
          <div className="header-center">
            <a
              href="#"
              className="logo logo-centered"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setActiveMenu('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="ted">TED<sup>x</sup></span><span className="unj">UNJ</span>
            </a>
          </div>

          {/* Right Side: Interactive Shopping Cart */}
          <div className="header-right">
            <button
              className={`cart-trigger-btn ${getCartTotalQty() > 0 ? 'has-items' : ''}`}
              onClick={() => setIsCartOpen(true)}
              aria-label="Keranjang Belanja"
            >
              <ShoppingCart size={20} />
              {getCartTotalQty() > 0 && (
                <span className="cart-badge-count">{getCartTotalQty()}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main App */}
      <main id="app">
        {location.pathname === '/event' ? (
          <EventPage addToCart={addToCart} ticketTypes={ticketTypes} />
        ) : location.pathname === '/about' ? (
          <AboutPage
            cardsRef={cardsRef}
            cardsVisible={cardsVisible}
            setSelectedEdition={setSelectedEdition}
            activeEdition={activeEdition}
            prevEdition={prevEdition}
            nextEdition={nextEdition}
            activeVideoId={activeVideoId}
            setActiveVideoId={setActiveVideoId}
            youtubeVideos={youtubeVideos}
            handleHeroMouseMove={handleHeroMouseMove}
          />
        ) : location.pathname === '/partner' ? (
          <PartnerPage />
        ) : (
          <HomePage
            scrollProgress={scrollProgress}
            parallaxOffset={parallaxOffset}
            handleHeroMouseMove={handleHeroMouseMove}
            navigate={navigate}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="ted">TED<sup>x</sup></span>UNJ
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} TEDxUNJ. This independent TEDx event is operated under license from TED. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Navigation Slide Drawer */}
      <div className={`menu-slide-drawer-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="menu-slide-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="menu-drawer-header">
            <div className="menu-drawer-logo-brand">
              <span className="ted">TED<sup>x</sup></span>UNJ 5.0
            </div>
            <button className="btn-close-drawer" onClick={() => setIsMenuOpen(false)} aria-label="Tutup Menu">
              <X size={24} />
            </button>
          </div>

          <div className="menu-drawer-body">
            <div className="menu-drawer-content-top">
              <div className="menu-drawer-tagline">THE NEXT CHAPTER</div>
              <nav className="menu-drawer-nav">
                <a
                  href="#hero"
                  className={`menu-nav-link ${location.pathname === '/' && activeMenu === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setActiveMenu('home');
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="link-text">Home</span>
                </a>
                <a
                  href="#about"
                  className={`menu-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    setActiveMenu('about');
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="link-text">About</span>
                </a>
                <a
                  href="/event"
                  className={`menu-nav-link ${location.pathname === '/event' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/event');
                    setActiveMenu('event');
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="link-text">Event</span>
                </a>
                <a
                  href="/partner"
                  className={`menu-nav-link ${location.pathname === '/partner' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/partner');
                    setActiveMenu('partner');
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="link-text">Partner</span>
                </a>
              </nav>
            </div>

            <div className="menu-drawer-bottom-info">
              <div className="info-item">
                <span className="info-label">DATE</span>
                <span className="info-value">September 12, 2026</span>
              </div>
              <div className="info-item">
                <span className="info-label">VENUE</span>
                <span className="info-value">Auditorium UNJ, Jakarta</span>
              </div>
              
              <div className="socials-wrapper">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar Drawer */}
      <div className={`cart-slide-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-slide-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-drawer-header">
            <div className="cart-drawer-title">
              <ShoppingCart size={24} className="text-red-500" />
              <h3>Your Cart</h3>
            </div>
            <button className="btn-close-drawer" onClick={() => setIsCartOpen(false)} aria-label="Tutup Keranjang">
              <X size={24} />
            </button>
          </div>

          <div className="cart-drawer-body">
            {cartItems.length === 0 ? (
              <div className="cart-empty-state">
                <ShoppingCart size={48} className="text-gray-400 mb-4 animate-pulse" />
                <p>Your cart is empty</p>
                <button className="btn-primary-small mt-4" onClick={() => {
                  setIsCartOpen(false);
                  navigate('/event');
                  setTimeout(() => {
                    document.getElementById('ticket-store-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}>
                  Pilih Tiket
                </button>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.type} className="cart-item-card">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">Rp {item.price.toLocaleString('id-ID')}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="qty-controls">
                        <button className="qty-btn" onClick={() => updateCartQty(item.type, item.qty - 1)}>
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateCartQty(item.type, item.qty + 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="btn-remove-item" onClick={() => removeFromCart(item.type)} aria-label="Hapus Item">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-drawer-footer">
              <div className="subtotal-row">
                <span>Subtotal:</span>
                <span className="subtotal-price">Rp {getCartTotalPrice().toLocaleString('id-ID')}</span>
              </div>
              <button
                className="btn-checkout-now"
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
              >
                Checkout Now <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal Overlay */}
      {isCheckoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="checkout-modal-header">
              <h3>Formulir Pemesanan Tiket</h3>
              <button className="btn-close-modal" onClick={() => setIsCheckoutOpen(false)} aria-label="Tutup Formulir">
                <X size={20} />
              </button>
            </div>

            {!generatedPass ? (
              <form
                className="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const ticketRef = 'TEDX' + Math.random().toString(36).substring(2, 8).toUpperCase();
                  setGeneratedPass({
                    ...checkoutData,
                    ticketRef,
                    items: [...cartItems],
                    total: getCartTotalPrice(),
                    date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
                  });
                  setCartItems([]);
                }}
              >
                <div className="form-group">
                  <label htmlFor="name-input">Nama Lengkap</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email-input">Alamat Email</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="Contoh: budi@gmail.com"
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inst-input">Instansi / Sekolah / Universitas</label>
                  <input
                    id="inst-input"
                    type="text"
                    required
                    placeholder="Contoh: Universitas Negeri Jakarta"
                    value={checkoutData.institution}
                    onChange={(e) => setCheckoutData({ ...checkoutData, institution: e.target.value })}
                  />
                </div>

                <div className="checkout-order-summary">
                  <h4>Ringkasan Pembelian</h4>
                  <div className="summary-list">
                    {cartItems.map((item) => (
                      <div key={item.type} className="summary-item">
                        <span>{item.name} (x{item.qty})</span>
                        <span>Rp {(item.price * item.qty).toLocaleString('id-ID')}</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-total">
                    <span>Total Bayar:</span>
                    <span>Rp {getCartTotalPrice().toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <button type="submit" className="btn-submit-checkout">
                  Bayar & Terbitkan Tiket <Sparkles size={18} className="ml-2" />
                </button>
              </form>
            ) : (
              <div className="boarding-pass-success-container">
                <div className="success-banner">
                  <Sparkles size={24} className="text-green-500 animate-pulse" />
                  <h4>Pembayaran Berhasil! Tiket Diterbitkan.</h4>
                </div>

                <div className="boarding-pass-card">
                  <div className="boarding-pass-main">
                    <div className="boarding-pass-header">
                      <div className="bp-logo">
                        <span className="ted">TED<sup>x</sup></span>UNJ 5.0
                      </div>
                      <div className="bp-ref">
                        <span className="label">BOOKING REF</span>
                        <span className="val">{generatedPass.ticketRef}</span>
                      </div>
                    </div>

                    <div className="bp-event-title">
                      <h3>THE NEXT CHAPTER</h3>
                      <p>Main Conference Event</p>
                    </div>

                    <div className="bp-details-grid">
                      <div className="bp-detail">
                        <span className="label">PASSENGER NAME</span>
                        <span className="val">{generatedPass.name}</span>
                      </div>
                      <div className="bp-detail">
                        <span className="label">INSTITUTION</span>
                        <span className="val">{generatedPass.institution}</span>
                      </div>
                      <div className="bp-detail">
                        <span className="label">DATE & TIME</span>
                        <span className="val">12 SEPT 2026, 08:30 WIB</span>
                      </div>
                      <div className="bp-detail">
                        <span className="label">VENUE</span>
                        <span className="val">Auditorium UNJ Kampus A</span>
                      </div>
                    </div>

                    <div className="bp-ticket-items-row">
                      <span className="label">TIKET YANG DIBELI</span>
                      <div className="bp-items-list">
                        {generatedPass.items.map((item: any) => (
                          <span key={item.type} className="bp-item-badge">
                            {item.name} (x{item.qty})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="boarding-pass-stub-divider">
                    <div className="stub-notch top"></div>
                    <div className="stub-dots"></div>
                    <div className="stub-notch bottom"></div>
                  </div>

                  <div className="boarding-pass-stub">
                    <div className="stub-header">
                      <span>BOARDING PASS</span>
                    </div>

                    <div className="stub-qr-placeholder">
                      <div className="stub-barcode">
                        <div className="barcode-line w-2"></div>
                        <div className="barcode-line w-4"></div>
                        <div className="barcode-line w-1"></div>
                        <div className="barcode-line w-6"></div>
                        <div className="barcode-line w-2"></div>
                        <div className="barcode-line w-3"></div>
                        <div className="barcode-line w-1"></div>
                        <div className="barcode-line w-5"></div>
                        <div className="barcode-line w-2"></div>
                        <div className="barcode-line w-4"></div>
                      </div>
                      <span className="barcode-text">{generatedPass.ticketRef}</span>
                    </div>

                    <div className="stub-meta">
                      <div className="stub-meta-item">
                        <span className="label">REF CODE</span>
                        <span className="val">{generatedPass.ticketRef}</span>
                      </div>
                      <div className="stub-meta-item">
                        <span className="label">DATE</span>
                        <span className="val">12/09/26</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="boarding-pass-actions">
                  <button
                    className="btn-print-ticket"
                    onClick={() => window.print()}
                  >
                    Cetak / Simpan PDF
                  </button>
                  <button
                    className="btn-done-close"
                    onClick={() => {
                      setGeneratedPass(null);
                      setIsCheckoutOpen(false);
                    }}
                  >
                    Selesai
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
