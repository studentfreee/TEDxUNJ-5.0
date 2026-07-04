interface Sponsor {
  id: string;
  name: string;
  website: string;
  logoUrl: string;
}

export default function PartnerPage() {
  const sponsors: Sponsor[] = [
    {
      id: 'bem-unj',
      name: 'BEM UNJ',
      website: 'https://instagram.com/bemunj_official',
      logoUrl: '/sponsor/logo-bem.png'
    },
    {
      id: 'bem-feb',
      name: 'BEM FEB UNJ',
      website: 'https://instagram.com/bemfebunj',
      logoUrl: '/sponsor/logo-bemfeb.png'
    },
    {
      id: 'hima-feb',
      name: 'HIMA FEB UNJ',
      website: 'https://instagram.com/himafe_unj',
      logoUrl: '/sponsor/logo-hima-feb.png'
    },
    {
      id: 'bem-fip',
      name: 'BEM FIP UNJ',
      website: 'https://instagram.com/bemfipunj',
      logoUrl: '/sponsor/logo-bemf.png'
    },
    {
      id: 'kemahasiswaan-unj',
      name: 'Kemahasiswaan UNJ',
      website: 'https://instagram.com/kemahasiswaanunj',
      logoUrl: '/sponsor/logo-kemahasiswaan-unj.png'
    },
    {
      id: 'aiesec-unj',
      name: 'AIESEC in UNJ',
      website: 'https://instagram.com/aiesecunj',
      logoUrl: '/sponsor/logo-aiesec.png'
    },
    {
      id: 'dedikasi-unj',
      name: 'Dedikasi UNJ',
      website: 'https://instagram.com/dedikasiunj',
      logoUrl: '/sponsor/logo-dedikasi.png'
    },
    {
      id: 'iiw-unj',
      name: 'Indonesia International Week',
      website: 'https://instagram.com/iiw_unj',
      logoUrl: '/sponsor/logo-indonesia-international-week.png'
    },
    {
      id: 'mahasiswa-jkt',
      name: 'Mahasiswa Jakarta',
      website: 'https://instagram.com/mahasiswajkt',
      logoUrl: '/sponsor/logo-mahasiswajkt.png'
    },
    {
      id: 'event-mahasiswa',
      name: 'Event Mahasiswa',
      website: 'https://instagram.com/eventmahasiswa',
      logoUrl: '/sponsor/logo-eventmahasiswa.png'
    },
    {
      id: 'info-event',
      name: 'Info Event',
      website: 'https://instagram.com/info.event',
      logoUrl: '/sponsor/logo-info-event.jpg'
    },
    {
      id: 'eterprener',
      name: 'Eterprener',
      website: 'https://instagram.com',
      logoUrl: '/sponsor/logo-eterprener.png'
    },
    {
      id: 'kitalulus',
      name: 'KitaLulus',
      website: 'https://kitalulus.com',
      logoUrl: '/sponsor/logo-kitalulus.png'
    },
    {
      id: 'itoen',
      name: 'ITO EN',
      website: 'https://itoen.co.id',
      logoUrl: '/sponsor/logo-itoen.png'
    }
  ];

  return (
    <div className="partner-page-wrapper single-section-layout animate-fade-in">
      <div className="kawung-bg" style={{ opacity: 0.04 }}></div>
      <div className="dotted-grid-bg"></div>
      
      <div className="ambient-glow glow-pink" style={{ top: '20%', left: '15%', opacity: 0.15 }}></div>
      <div className="ambient-glow glow-orange" style={{ bottom: '25%', right: '15%', opacity: 0.15 }}></div>

      <div className="partner-content-container">
        {/* ==================== SPONSORSHIP HERO HEADER ==================== */}
        <header className="partner-single-header text-center">
          <h1 className="partner-hero-title">Sponsorship</h1>
          <p className="partner-hero-subtitle">
            Collaborating with inspiring student organizations, media partners, and external communities to drive innovation.
          </p>
        </header>

        {/* ==================== LOGO SHAPE CARDS GRID ==================== */}
        <div className="sponsors-shapes-grid">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sponsor-shape-link-wrapper"
            >
              <div className="sponsor-shape-container">
                {/* Clean white rounded card containing the grayscale-to-color logo */}
                <div className="sponsor-organic-shape">
                  <div className="sponsor-logo-inner-box">
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="sponsor-logo-image" 
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
