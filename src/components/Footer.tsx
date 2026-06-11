export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3 className="footer__title">قلب مرقّع</h3>
          <p className="footer__author">بيان شراونة</p>
          <p className="footer__genre">رواية واقعية مقدسية عربية</p>
        </div>

        <div className="footer__divider" aria-hidden="true">
          <span />
          <span className="footer__ornament">✦</span>
          <span />
        </div>

        <p className="footer__tagline">
          أبوابٌ مغلقة فُتحت أخيرًا، وجرحٌ نجا ليحكي.
        </p>

        <span className="footer-credit" dir="ltr">
          <span className="credit-by">by</span>{' '}
          <span className="credit-two">2</span>
          <span className="credit-in">in</span>
        </span>
      </div>
    </footer>
  )
}
