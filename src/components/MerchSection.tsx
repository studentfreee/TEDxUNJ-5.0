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
      </div>
    </section>
  );
}
