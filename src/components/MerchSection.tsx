const MERCH_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc2WRFxbdRmLd4g5oOlJf6-a2wsLKAaId72rNUwNjgZ-v_uJA/viewform";

export default function MerchSection() {
  return (
    <section id="event-merch-section" className="merch-section">
      {/* Scaled Canvas Stage */}
      <div className="merch-canvas">
        {/* LOGO26 (Stroke) - Flanking Left Wing */}
        <img
          src="/sponsor/logo_stroke_wing_left.svg"
          alt=""
          aria-hidden="true"
          className="merch-stroke-wing-left"
        />

        {/* LOGO26 (Stroke) - Flanking Right Wing */}
        <img
          src="/sponsor/logo_stroke_wing_right.svg"
          alt=""
          aria-hidden="true"
          className="merch-stroke-wing-right"
        />

        {/* pintu.svg - Door arch + side pillars + title banner + title text (full frame backdrop) */}
        <img
          src="/merch/pintu.svg"
          alt=""
          aria-hidden="true"
          className="merch-pintu"
        />

        {/* merch.svg - 5 product cards + bundling section + product photos (content region) */}
        <img
          src="/merch/merch.svg"
          alt=""
          aria-hidden="true"
          className="merch-content"
        />

        {/* Main "BUY ME" Bundling Ticket Hotspot Link (Google Form) */}
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-buyme-link"
          title="Buy TEDxUNJ Merchandise (Google Form)"
          aria-label="Buy TEDxUNJ Merchandise (Google Form)"
        >
          <span className="sr-only">Buy Merchandise</span>
        </a>

        {/* Individual Product Cards Buy Ticket Hotspots */}
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-card-buy-link card-1"
          title="Buy Merch Item 1"
        >
          <span className="sr-only">Buy Item 1</span>
        </a>
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-card-buy-link card-2"
          title="Buy Merch Item 2"
        >
          <span className="sr-only">Buy Item 2</span>
        </a>
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-card-buy-link card-3"
          title="Buy Merch Item 3"
        >
          <span className="sr-only">Buy Item 3</span>
        </a>
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-card-buy-link card-4"
          title="Buy Merch Item 4"
        >
          <span className="sr-only">Buy Item 4</span>
        </a>
        <a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-card-buy-link card-5"
          title="Buy Merch Item 5"
        >
          <span className="sr-only">Buy Item 5</span>
        </a>
      </div>
    </section>
  );
}
