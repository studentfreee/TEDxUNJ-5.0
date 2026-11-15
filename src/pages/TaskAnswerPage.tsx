import AboutFooter from '../components/AboutFooter';
import { FACT_MYTH_ITEMS, type FactMythItem } from '../data/taskAnswerData';
import './TaskAnswerPage.css';

/**
 * Helper component that renders multi-line wrapping text with:
 * - Thick white outer stroke + directional drop shadow (back layer)
 * - Horizontal pink-to-orange gradient fill (front layer)
 * Matches Figma's Source Serif Pro Black/SemiBold outlined gradient typography
 * while remaining 100% responsive across Desktop, Tablet, and Mobile.
 */
function OutlinedGradientText({
  text,
  className = '',
  as: Tag = 'p',
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
}) {
  return (
    <Tag className={`ta-outlined-grad ${className}`}>
      <span className="ta-outlined-grad__stroke" aria-hidden="true">
        {text}
      </span>
      <span className="ta-outlined-grad__fill">{text}</span>
    </Tag>
  );
}

/**
 * Groups the 10 Fact/Myth items into 5 pairs (2 items per board),
 * matching the 5 "Key answer" frames in Figma (#620:343, #620:364, #620:385, #620:406, #620:427).
 */
const QUESTION_BOARDS: FactMythItem[][] = [];
for (let i = 0; i < FACT_MYTH_ITEMS.length; i += 2) {
  QUESTION_BOARDS.push(FACT_MYTH_ITEMS.slice(i, i + 2));
}

export default function TaskAnswerPage() {
  const scrollToIntro = () => {
    const el = document.getElementById('task-answer-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="task-answer-page animate-fade-in">
      {/* =====================================================================
          SECTION 1: COVER "Task Answer" (Figma Frame #620:57)
          ===================================================================== */}
      <section id="task-answer-cover" className="ta-cover-section">
        {/* Vertical Stripes Layer (#620:58) */}
        <img
          src="/task-answer/stripes-intro.svg"
          alt=""
          aria-hidden="true"
          className="ta-stripes-bg"
        />

        {/* Top Gigi Balang Fence Strip (#620:204) */}
        <img
          src="/task-answer/cover-gigi-balang-top.png"
          alt=""
          aria-hidden="true"
          className="ta-cover-gigi-balang-top"
        />

        {/* Top Purple-Magenta Fade (#620:208) */}
        <div className="ta-cover-top-fade" aria-hidden="true" />

        {/* Left & Right Monas Landmark Towers (#620:137 & #620:58) */}
        <img
          src="/task-answer/monas-left.svg"
          alt=""
          aria-hidden="true"
          className="ta-cover-monas ta-cover-monas--left"
        />
        <img
          src="/task-answer/monas-left.svg"
          alt=""
          aria-hidden="true"
          className="ta-cover-monas ta-cover-monas--right"
        />

        {/* Bottom Olive-Green Fade (#620:203) */}
        <div className="ta-cover-bottom-fade" aria-hidden="true" />

        {/* Main 1440x1024 Content Stage */}
        <div className="ta-cover-inner">
          {/* "Task Answer" SVG Headline (#620:209) */}
          <div className="ta-cover-title-wrap">
            <h1 className="ta-sr-only">Task Answer — Fact or Myth: Betawi Edition</h1>
            <svg
              viewBox="0 0 520 110"
              className="ta-section-heading-svg ta-cover-heading-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="taCoverTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2F5A" />
                  <stop offset="100%" stopColor="#FDA22F" />
                </linearGradient>
                <filter id="taCoverTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
                  <feDropShadow
                    dx="-9.62"
                    dy="19.25"
                    stdDeviation="4.8"
                    floodColor="#000000"
                    floodOpacity="0.25"
                  />
                </filter>
              </defs>
              <text
                x="50%"
                y="72"
                textAnchor="middle"
                fontFamily="'Source Serif 4', 'Source Serif Pro', Georgia, serif"
                fontWeight="900"
                fontSize="60"
                fill="url(#taCoverTitleGrad)"
                stroke="#FFFFFF"
                strokeWidth="9.62"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                filter="url(#taCoverTitleShadow)"
              >
                Task Answer
              </text>
            </svg>
          </div>

          {/* Centerpiece Glowing Betawi Book (#620:210) */}
          <button
            type="button"
            className="ta-cover-book-btn"
            onClick={scrollToIntro}
            aria-label="Lihat Kunci Jawaban Task Answer"
          >
            <img
              src="/task-answer/book-large.svg"
              alt="Buku Task Answer TEDxUNJ"
              className="ta-cover-book-img"
            />
          </button>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTRO "Halo, Abang, Mpok!" (Figma Frame #620:315)
          ===================================================================== */}
      <section id="task-answer-intro" className="ta-intro-section">
        {/* Vertical Stripes Layer (#620:316) */}
        <img
          src="/task-answer/stripes-intro.svg"
          alt=""
          aria-hidden="true"
          className="ta-stripes-bg"
        />

        {/* Top Olive-Green Blend (#620:329) */}
        <div className="ta-intro-top-fade" aria-hidden="true" />

        {/* Bottom Purple-Magenta Blend (#620:330) */}
        <div className="ta-intro-bottom-fade" aria-hidden="true" />

        <div className="ta-intro-inner">
          {/* "Halo, Abang, Mpok!" SVG Headline (#620:331) */}
          <div className="ta-intro-title-wrap">
            <svg
              viewBox="0 0 720 110"
              className="ta-section-heading-svg ta-intro-heading-svg"
              role="heading"
              aria-level={2}
              aria-label="Halo, Abang, Mpok!"
            >
              <defs>
                <linearGradient id="taIntroTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2F5A" />
                  <stop offset="100%" stopColor="#FDA22F" />
                </linearGradient>
                <filter id="taIntroTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
                  <feDropShadow
                    dx="-9.62"
                    dy="19.25"
                    stdDeviation="4.8"
                    floodColor="#000000"
                    floodOpacity="0.25"
                  />
                </filter>
              </defs>
              <text
                x="50%"
                y="72"
                textAnchor="middle"
                fontFamily="'Source Serif 4', 'Source Serif Pro', Georgia, serif"
                fontWeight="900"
                fontSize="60"
                fill="url(#taIntroTitleGrad)"
                stroke="#FFFFFF"
                strokeWidth="9.62"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                filter="url(#taIntroTitleShadow)"
              >
                Halo, Abang, Mpok!
              </text>
            </svg>
          </div>

          {/* Center Mascot BAWI + Left & Right Speech Bubbles (#620:332, #620:337, #620:333) */}
          <div className="ta-intro-stage">
            {/* Left Speech Bubble (#620:337 & #620:340) */}
            <div className="ta-speech-bubble ta-speech-bubble--left">
              <img
                src="/task-answer/bubble-left.svg"
                alt=""
                aria-hidden="true"
                className="ta-speech-bubble__bg"
              />
              <div className="ta-speech-bubble__content ta-speech-bubble__content--left">
                <p className="ta-bubble-outlined-text ta-bubble-outlined-text--left">
                  <span className="ta-bubble-outlined-text__stroke" aria-hidden="true">
                    Udah selesai nebak-nebak? Sekarang waktunye kite cek jawaban!
                  </span>
                  <span className="ta-bubble-outlined-text__fill">
                    Udah selesai nebak-nebak? Sekarang waktunye kite cek jawaban!
                  </span>
                </p>
              </div>
              <svg
                className="ta-speech-bubble__mobile-tail ta-mobile-tail--down"
                viewBox="0 0 40 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 0 L26 24 L34 0 Z" fill="#FDE9AC" />
              </svg>
            </div>

            {/* Center Mascot Ondel-Ondel BAWI (#620:332) */}
            <div className="ta-intro-mascot-wrap">
              <img
                src="/assets/betawi/mascot_bawi.png"
                alt="Maskot Ondel-Ondel BAWI"
                className="ta-intro-mascot-img"
              />
            </div>

            {/* Right Speech Bubble (#620:333 & #620:336) */}
            <div className="ta-speech-bubble ta-speech-bubble--right">
              <svg
                className="ta-speech-bubble__mobile-tail ta-mobile-tail--up"
                viewBox="0 0 40 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 24 L14 0 L36 24 Z" fill="#FDA22F" />
              </svg>
              <img
                src="/task-answer/bubble-right.svg"
                alt=""
                aria-hidden="true"
                className="ta-speech-bubble__bg"
              />
              <div className="ta-speech-bubble__content ta-speech-bubble__content--right">
                <p className="ta-bubble-outlined-text ta-bubble-outlined-text--right">
                  <span className="ta-bubble-outlined-text__stroke" aria-hidden="true">
                    Nah, lewat Fact or Myth : Betawi Edition, kite bukan hanya ngetes seberapa
                    Betawi pengetahuan Abang Mpok, tapi kita juga belajar mengenal lebih dekat
                    mengenai kebudayaan Betawi yang kaya, unik serta penuh makna.
                  </span>
                  <span className="ta-bubble-outlined-text__fill">
                    Nah, lewat Fact or Myth : Betawi Edition, kite bukan hanya ngetes seberapa
                    Betawi pengetahuan Abang Mpok, tapi kita juga belajar mengenal lebih dekat
                    mengenai kebudayaan Betawi yang kaya, unik serta penuh makna.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wide Glass Banner (#620:341 & #620:342) */}
          <div className="ta-intro-bottom-banner">
            <OutlinedGradientText
              as="p"
              className="ta-intro-banner-text"
              text="Yuk cocokin jawaban Abang Mpok melalui kunci di bawah ini. Siape tahu ada fakta-fakta yang baru Abang Mpok ketahui hari ini!"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: 5 KEY ANSWER BOARDS (Figma Frames #620:343 .. #620:427)
          ===================================================================== */}
      {QUESTION_BOARDS.map((boardItems, boardIdx) => {
        const isEvenBoard = boardIdx % 2 === 0;
        const gradId = `taKeyHeadingGrad_${boardIdx}`;
        const shadowId = `taKeyHeadingShadow_${boardIdx}`;

        return (
          <section
            key={boardIdx}
            id={boardIdx === 0 ? 'task-answer-keys' : undefined}
            className={`ta-key-section ${
              isEvenBoard ? 'ta-key-section--even' : 'ta-key-section--odd'
            }`}
          >
            {/* Top Seamless Blend Overlay */}
            <div className="ta-key-top-fade" aria-hidden="true" />

            {/* Bottom Seamless Blend Overlay */}
            <div className="ta-key-bottom-fade" aria-hidden="true" />

            <div className="ta-key-inner">
              {/* "Nyok, kite lihat berape yang bener!" SVG Headline (#620:346) */}
              <div className="ta-key-heading-wrap">
                <svg
                  viewBox="0 0 1120 115"
                  className="ta-section-heading-svg ta-key-heading-svg"
                  role={boardIdx === 0 ? 'heading' : undefined}
                  aria-level={boardIdx === 0 ? 2 : undefined}
                  aria-label={
                    boardIdx === 0 ? 'Nyok, kite lihat berape yang bener!' : undefined
                  }
                  aria-hidden={boardIdx !== 0 ? 'true' : undefined}
                >
                  <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DE2F5A" />
                      <stop offset="100%" stopColor="#FDA22F" />
                    </linearGradient>
                    <filter id={shadowId} x="-20%" y="-20%" width="160%" height="160%">
                      <feDropShadow
                        dx="-9.62"
                        dy="19.25"
                        stdDeviation="4.8"
                        floodColor="#000000"
                        floodOpacity="0.25"
                      />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="76"
                    textAnchor="middle"
                    fontFamily="'Source Serif 4', 'Source Serif Pro', Georgia, serif"
                    fontWeight="900"
                    fontSize="60"
                    fill={`url(#${gradId})`}
                    stroke="#FFFFFF"
                    strokeWidth="9.62"
                    strokeLinejoin="round"
                    paintOrder="stroke fill"
                    filter={`url(#${shadowId})`}
                  >
                    Nyok, kite lihat berape yang bener!
                  </text>
                </svg>
              </div>

              {/* Cream-to-Crimson Board Card (#620:345, 1273x831) */}
              <div className="ta-key-board">
                {boardItems.map((item) => {
                  const isMyth = item.answer === 'MYTH';
                  const fullQuestion = `${item.id}. ${item.question}`;

                  return (
                    <article key={item.id} className="ta-key-item">
                      {/* 1. Numbered Statement with White Stroke + Gradient Fill (#620:349) */}
                      <OutlinedGradientText
                        as="h3"
                        className="ta-key-question"
                        text={fullQuestion}
                      />

                      {/* 2. Ornamental Notched Answer Plaque (#620:350 & #620:353) */}
                      <div className="ta-plaque-badge">
                        <img
                          src="/task-answer/answer-badge.svg"
                          alt=""
                          aria-hidden="true"
                          className="ta-plaque-badge__bg"
                        />
                        <div className="ta-plaque-badge__content">
                          <span className="ta-plaque-text">
                            <span className="ta-plaque-text__stroke" aria-hidden="true">
                              Answer :
                            </span>
                            <span className="ta-plaque-text__fill">Answer :</span>
                          </span>

                          {isMyth ? (
                            <span
                              className="ta-plaque-icon ta-plaque-icon--myth"
                              aria-hidden="true"
                            >
                              ✖
                            </span>
                          ) : (
                            <span
                              className="ta-plaque-icon ta-plaque-icon--fact"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                          )}

                          <span className="ta-plaque-text">
                            <span className="ta-plaque-text__stroke" aria-hidden="true">
                              {item.answer}
                            </span>
                            <span className="ta-plaque-text__fill">{item.answer}</span>
                          </span>
                        </div>
                      </div>

                      {/* 3. Inner Glass Explanation Box (#620:354 & #620:355) */}
                      <div className="ta-key-explanation-box">
                        <p className="ta-key-explanation-lead">{item.leadIn}</p>
                        <p className="ta-key-explanation-body">{item.explanation}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* =====================================================================
          SECTION 4: CLOSING "Nah, gimane hasilnye, Abang Mpok?" (Figma #620:448)
          ===================================================================== */}
      <section id="task-answer-closing" className="ta-closing-section">
        {/* Vertical Stripes Layer (#620:449) */}
        <img
          src="/task-answer/stripes-intro.svg"
          alt=""
          aria-hidden="true"
          className="ta-stripes-bg"
        />

        {/* Top Crimson Blend (#620:462) */}
        <div className="ta-closing-top-fade" aria-hidden="true" />

        {/* Bottom Purple-Magenta Blend (#620:463) */}
        <div className="ta-closing-bottom-fade" aria-hidden="true" />

        <div className="ta-closing-inner">
          {/* "Nah, gimane hasilnye, Abang Mpok?" SVG Headline (#620:464) */}
          <div className="ta-closing-title-wrap">
            <svg
              viewBox="0 0 1140 115"
              className="ta-section-heading-svg ta-closing-heading-svg"
              role="heading"
              aria-level={2}
              aria-label="Nah, gimane hasilnye, Abang Mpok?"
            >
              <defs>
                <linearGradient id="taClosingTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2F5A" />
                  <stop offset="100%" stopColor="#FDA22F" />
                </linearGradient>
                <filter id="taClosingTitleShadow" x="-20%" y="-20%" width="160%" height="160%">
                  <feDropShadow
                    dx="-9.62"
                    dy="19.25"
                    stdDeviation="4.8"
                    floodColor="#000000"
                    floodOpacity="0.25"
                  />
                </filter>
              </defs>
              <text
                x="50%"
                y="76"
                textAnchor="middle"
                fontFamily="'Source Serif 4', 'Source Serif Pro', Georgia, serif"
                fontWeight="900"
                fontSize="60"
                fill="url(#taClosingTitleGrad)"
                stroke="#FFFFFF"
                strokeWidth="9.62"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                filter="url(#taClosingTitleShadow)"
              >
                Nah, gimane hasilnye, Abang Mpok?
              </text>
            </svg>
          </div>

          {/* 2-Column Content: Left (Tilted Book + BAWI) & Right (Reflection Card + Salam Budaya Pill) */}
          <div className="ta-closing-grid">
            {/* Left Visual Composition (#620:465 & #620:559) */}
            <div className="ta-closing-visual">
              <img
                src="/task-answer/book-small.svg"
                alt=""
                aria-hidden="true"
                className="ta-closing-book-img"
              />
              <img
                src="/assets/betawi/mascot_bawi.png"
                alt="Maskot Ondel-Ondel BAWI"
                className="ta-closing-mascot-img"
              />
            </div>

            {/* Right Reflection Column (#620:561, #620:563, #620:560, #620:562) */}
            <div className="ta-closing-right-col">
              <div className="ta-closing-card">
                <OutlinedGradientText
                  as="p"
                  className="ta-closing-paragraph"
                  text="Berape nih jawaban yang bener?"
                />
                <OutlinedGradientText
                  as="p"
                  className="ta-closing-paragraph"
                  text="Apa ternyata ada beberapa yang baru Abang Mpok tahu hari ini?"
                />
                <OutlinedGradientText
                  as="p"
                  className="ta-closing-paragraph"
                  text="Yang penting, jangan berhenti sampai di kuis ini aje. Budaya bukan cuma untuk diketahui, tetapi juga untuk dikenali, dihargai, serta terus dilestarikan."
                />
                <OutlinedGradientText
                  as="p"
                  className="ta-closing-paragraph"
                  text="Sampai ketemu di cerita Betawi selanjutnye!"
                />
              </div>

              <div className="ta-salam-pill">
                <div className="ta-salam-pill-row">
                  <OutlinedGradientText
                    as="span"
                    className="ta-salam-pill-text"
                    text="Salam budaya, Abang Mpok!"
                  />
                  <span className="ta-salam-heart" aria-hidden="true">
                    ❤️
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: FOOTER (Figma Frame #620:572)
          ===================================================================== */}
      <div className="ta-footer-wrapper">
        <AboutFooter />
      </div>
    </div>
  );
}
