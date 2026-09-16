export default function AboutFooter() {
  return (
    <footer className="about-footer-section" id="about-footer">
      <div className="about-footer-card">
        {/* Left Column: Brand & Socials */}
        <div className="about-footer-left">
          <div className="about-footer-brand">
            <img
              src="/footer/ted_logo.svg"
              alt="TEDx UNJ"
              className="about-footer-ted-logo"
            />
            <span className="about-footer-edition">5.0</span>
          </div>

          <div className="about-footer-socials">
            <a
              href="https://www.instagram.com/tedxunj"
              target="_blank"
              rel="noopener noreferrer"
              className="about-footer-social-link"
              aria-label="Instagram"
            >
              <img
                src="/footer/instagram.svg"
                alt="Instagram"
                className="about-footer-social-icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@tedxunj"
              target="_blank"
              rel="noopener noreferrer"
              className="about-footer-social-link"
              aria-label="TikTok"
            >
              <img
                src="/footer/tiktok.svg"
                alt="TikTok"
                className="about-footer-social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxunj"
              target="_blank"
              rel="noopener noreferrer"
              className="about-footer-social-link"
              aria-label="LinkedIn"
            >
              <img
                src="/footer/linkedin.svg"
                alt="LinkedIn"
                className="about-footer-social-icon"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Legal Information */}
        <div className="about-footer-right">
          <div className="about-footer-copyright-line">
            <img
              src="/footer/copyright.svg"
              alt=""
              aria-hidden="true"
              className="about-footer-copyright-icon"
            />
            <span>{new Date().getFullYear()} All Rights Reserved</span>
          </div>
          <p className="about-footer-legal-line">
            This independent TEDx event is operated
          </p>
          <p className="about-footer-legal-line">
            under license from TED
          </p>
        </div>
      </div>
    </footer>
  );
}
