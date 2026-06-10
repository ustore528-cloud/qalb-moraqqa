import { useState } from 'react'
import { WHATSAPP_URL } from '../constants'

const navLinks = [
  { href: '#about', label: 'عن الرواية' },
  { href: '#before-read', label: 'قبل أن تقرأ' },
  { href: '#meaning', label: 'معنى الرواية' },
  { href: '#why-read', label: 'لماذا تقرأها' },
  { href: '#order', label: 'اطلب نسختك' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#hero" className="header__logo">
          <span className="header__logo-title">قلب مرقّع</span>
          <span className="header__logo-author">بيان شراونة</span>
        </a>

        <div className="header__toolbar">
          <a
            href={WHATSAPP_URL}
            className="btn btn--primary btn--compact header__cta-mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساب
          </a>

          <button
            type="button"
            className="header__menu-btn"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            className="btn btn--primary header__cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            اطلب عبر واتساب
          </a>
        </nav>
      </div>
    </header>
  )
}
