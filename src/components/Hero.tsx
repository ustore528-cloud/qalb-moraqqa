import BookPromo from './BookPromo'
import QuoteBlock from './QuoteBlock'
import { WHATSAPP_URL } from '../constants'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="pill-badge hero__badge">رواية واقعية مقدسية عربية</span>
          <h1 className="hero__title">قلب مرقّع</h1>
          <p className="hero__author">بيان شراونة</p>

          <div className="hero__divider" aria-hidden="true">
            <span />
            <span className="hero__divider-icon">✦</span>
            <span />
          </div>

          <QuoteBlock className="quote-block--hero">
            <p className="hero__headline">
              ليست قصة تُقرأ ثم تُنسى… بل جرحٌ نجا ليحكي.
            </p>
          </QuoteBlock>

          <p className="hero__desc">
            رواية تكشف ما يحدث{' '}
            <span className="hl hl--hero-gold">خلف الأبواب المغلقة</span>، وتحكي عن{' '}
            <span className="hl hl--hero-gold">وجعٍ إنساني</span> حقيقي، وعن{' '}
            <span className="hl hl--hero-light">قلوبٍ جرحتها الحياة</span> ثم حاولت أن{' '}
            <span className="hl hl--hero-gold">ترمّم نفسها</span>.
          </p>

          <div className="hero__actions">
            <a
              href={WHATSAPP_URL}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              اطلب الرواية عبر واتساب
            </a>
            <a href="#about" className="btn btn--ghost btn--ghost-hero">
              اكتشف الرواية
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <BookPromo />
        </div>
      </div>
    </section>
  )
}
