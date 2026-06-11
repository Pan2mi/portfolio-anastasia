import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { couleurPrincipale } from '../../data/competenceCouleurs';

export default function ProjetCard({ projet }) {
  const { t, lang } = useLang();
  const titre = lang === 'fr' ? projet.titre : projet.titreEn;
  const description = lang === 'fr' ? projet.description : projet.descriptionEn;
  const couleur = couleurPrincipale(projet.competences);

  return (
    <article className="projet-card">
      <div className="projet-card__img-wrap">
        <img
          src={projet.image}
          alt={titre}
          className="projet-card__img"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div
          className="projet-card__img-placeholder"
          style={{ backgroundColor: couleur }}
          aria-hidden="true"
        />
      </div>

      <div className="projet-card__body">
        <div className="projet-card__chips">
          {projet.domaines.map(cat => (
            <span key={cat} className="chip projet-card__chip">{cat}</span>
          ))}
        </div>
        <h3 className="projet-card__titre">{titre}</h3>
        <p className="projet-card__desc">{description}</p>
        <Link to={`/projets/${projet.slug}`} className="projet-card__lien">
          {t.projets.voirProjet}
        </Link>
      </div>
    </article>
  );
}
