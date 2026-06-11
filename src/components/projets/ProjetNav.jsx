import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

export default function ProjetNav({ precedent, suivant }) {
  const { t } = useLang();

  return (
    <nav className="projet-nav" aria-label="Navigation entre projets">
      <div className="projet-nav__inner">
        {precedent ? (
          <Link to={`/projets/${precedent.slug}`} className="projet-nav__lien projet-nav__lien--prev">
            <span className="projet-nav__label">{t.projetDetail.precedent}</span>
            <span className="projet-nav__titre">{precedent.titre}</span>
          </Link>
        ) : <div />}

        {suivant ? (
          <Link to={`/projets/${suivant.slug}`} className="projet-nav__lien projet-nav__lien--next">
            <span className="projet-nav__label">{t.projetDetail.suivant}</span>
            <span className="projet-nav__titre">{suivant.titre}</span>
          </Link>
        ) : <div />}
      </div>
    </nav>
  );
}
