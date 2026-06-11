import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import '../../styles/navbar.css';

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu burger à chaque changement de page
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const anchorLink = (anchor, label) =>
    isHome ? (
      <a href={`#${anchor}`} onClick={() => setMenuOpen(false)}>{label}</a>
    ) : (
      <Link to={`/#${anchor}`} onClick={() => setMenuOpen(false)}>{label}</Link>
    );

  const isTransparent = isHome && !scrolled;

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isTransparent ? ' navbar--transparent' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo / nom */}
        <Link to="/" className="navbar__logo">
          Anastasia Villien
        </Link>

        {/* Nav desktop */}
        <nav className="navbar__links" aria-label="Navigation principale">
          {anchorLink('competences', t.nav.competences)}
          {anchorLink('parcours', t.nav.parcours)}
          {anchorLink('apropos', t.nav.apropos)}
          {anchorLink('contact', t.nav.contact)}
          <Link to="/projets" className="navbar__projets-btn btn btn-violet">
            {t.nav.projets}
          </Link>
        </nav>

        {/* Actions droite */}
        <div className="navbar__actions">
          <button
            className="navbar__lang"
            onClick={toggle}
            aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
          >
            <span className={lang === 'fr' ? 'active' : ''}>FR</span>
            <span className="navbar__lang-sep">|</span>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>

          {/* Burger mobile */}
          <button
            className={`navbar__burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Navigation mobile">
          {anchorLink('competences', t.nav.competences)}
          {anchorLink('parcours', t.nav.parcours)}
          {anchorLink('apropos', t.nav.apropos)}
          {anchorLink('contact', t.nav.contact)}
          <Link to="/projets" className="btn btn-violet" onClick={() => setMenuOpen(false)}>
            {t.nav.projets}
          </Link>
        </nav>
      )}
    </header>
  );
}
