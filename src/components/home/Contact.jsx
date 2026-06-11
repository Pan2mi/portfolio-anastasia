import { useLang } from '../../context/LanguageContext';
import '../../styles/contact.css';

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <h2 className="contact__titre">{t.contact.titre}</h2>
        <p className="contact__invitation">{t.contact.invitation}</p>
        <div className="contact__grille">

          <a className="contact__item" href="mailto:anastasiavillien@gmail.com">
            <span className="contact__icon" aria-hidden="true">✉</span>
            <span>anastasiavillien@gmail.com</span>
          </a>

          <a className="contact__item" href="tel:+33650975287">
            <span className="contact__icon" aria-hidden="true">☎</span>
            <span>06 50 97 52 87</span>
          </a>

          <a
            className="contact__item"
            href="https://linkedin.com/in/anastasia-villien-b983b6166"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__icon" aria-hidden="true">↗</span>
            <span>LinkedIn</span>
          </a>

          <div className="contact__item contact__item--lieu">
            <span className="contact__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </span>
            <span>{t.contact.localisation}</span>
          </div>

        </div>

        <a
          className="contact__cv btn btn-outline"
          href="/cv-anastasia-villien.pdf"
          download
          aria-label={t.contact.telechargerCV}
        >
          ⬇ {t.contact.telechargerCV}
        </a>
      </div>
    </section>
  );
}
