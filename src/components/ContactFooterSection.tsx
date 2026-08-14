export default function ContactFooterSection() {
  return (
    <section id="contact" className="contact-section">
      {/* Bottom Pink Fade Strip (Figma rectangle.svg) */}
      <img
        src="/assets/betawi/rectangle.svg"
        alt=""
        className="contact-bottom-rectangle-strip"
      />
      {/* 2-Layer Responsive Container (1440x1024 Locked Viewport Height) */}
      <div className="contact-content">
        
        {/* Flanking Mascots (Figma Spec: 276px x 276px at top 6.5%) */}
        <img
          src="/assets/betawi/mascot_bawi.png"
          alt="BAWI Mascot Left"
          className="mascot-contact mascot-contact--left"
        />
        <img
          src="/assets/betawi/mascot_bawi.png"
          alt="BAWI Mascot Right"
          className="mascot-contact mascot-contact--right"
        />

        {/* Heading Title Group */}
        <div className="contact-header-group">
          <img
            src="/assets/betawi/want-to.svg"
            alt="Want to know more ?"
            className="contact-want-to-svg"
          />
          <img
            src="/assets/betawi/contact-us.svg"
            alt="CONTACT US!"
            className="contact-us-title-svg"
          />
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Phone */}
          <a
            href="https://wa.me/6287872887251"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-top">
              <div className="card-icon-box">
                <img src="/assets/betawi/contact_phone_icon.svg" alt="Phone" className="contact-icon-svg" />
              </div>
              <h4 className="card-label">Phone</h4>
              <p className="card-subtext">Speak to our friendly team.</p>
            </div>
            <div className="contact-card-value-pill">
              +62 878-7288-7251 (Aisyah)
            </div>
          </a>

          {/* Card 2: Location */}
          <a
            href="https://maps.google.com/?q=Universitas+Negeri+Jakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-top">
              <div className="card-icon-box">
                <img src="/assets/betawi/contact_location_icon.svg" alt="Location" className="contact-icon-svg" />
              </div>
              <h4 className="card-label">Location</h4>
              <p className="card-subtext">Find us on Universitas Negeri Jakarta.</p>
            </div>
            <div className="contact-card-value-pill">
              Gedung Ki Hadjar Dewantara
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:infotedxunj@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-top">
              <div className="card-icon-box">
                <img src="/assets/betawi/contact_email_icon.svg" alt="Email" className="contact-icon-svg" />
              </div>
              <h4 className="card-label">Email</h4>
              <p className="card-subtext">Reach us anytime.</p>
            </div>
            <div className="contact-card-value-pill">
              infotedxunj@gmail.com
            </div>
          </a>
        </div>

        {/* Footer Panel Glass Card (Figma Node 2:1642) */}
        <div className="footer-panel">
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

      </div>
    </section>
  );
}
