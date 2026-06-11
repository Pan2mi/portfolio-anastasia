import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjetNav from '../components/projets/ProjetNav';
import { projets } from '../data/projets';
import { couleurPrincipale } from '../data/competenceCouleurs';
import { useLang } from '../context/LanguageContext';
import '../styles/projet-detail.css';

export default function ProjetDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();

  const index = projets.findIndex(p => p.slug === slug);
  const projet = projets[index];

  if (!projet) {
    return (
      <>
        <Navbar />
        <main className="page-detail">
          <div className="container detail-404">
            <h1>Projet introuvable</h1>
            <Link to="/projets" className="btn btn-violet">← Retour aux projets</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const titre = lang === 'fr' ? projet.titre : projet.titreEn;
  const { detail } = projet;
  const precedent = index > 0 ? projets[index - 1] : null;
  const suivant = index < projets.length - 1 ? projets[index + 1] : null;
  const couleur = couleurPrincipale(projet.competences);

  return (
    <>
      <Navbar />
      <main className="page-detail">

        {/* Header */}
        <header className="detail-header">
          <div className="container">
            <div className="detail-header__chips">
              {projet.domaines.map(cat => (
                <span key={cat} className="chip detail-header__chip">{cat}</span>
              ))}
            </div>
            <h1 className="detail-header__titre">{titre}</h1>
            <div className="detail-header__img-wrap">
              <img
                src={projet.image}
                alt={titre}
                className="detail-header__img"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </header>

        {/* Corps */}
        <div className="detail-body">
          <div className="container detail-body__inner">

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <Link to="/projets" className="detail-sidebar__back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                {t.projets.titre}
              </Link>

              <div className="detail-sidebar__section">
                <p className="detail-sidebar__label">Outils</p>
                <div className="detail-sidebar__chips">
                  {projet.outils.map(o => (
                    <span key={o} className="chip detail-sidebar__chip">{o}</span>
                  ))}
                </div>
              </div>

              <div className="detail-sidebar__section">
                <p className="detail-sidebar__label">Compétences</p>
                <div className="detail-sidebar__chips">
                  {projet.competences.map(c => (
                    <span key={c} className="chip detail-sidebar__chip">{c}</span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Contenu */}
            <div className="detail-content">

              <section>
                <h2 className="detail-section__titre">{t.projetDetail.contexte}</h2>
                <p className="detail-section__texte">
                  {lang === 'fr' ? detail.contexte : detail.contexteEn}
                </p>
              </section>

              <section>
                <h2 className="detail-section__titre">{t.projetDetail.role}</h2>
                <p className="detail-section__texte">
                  {lang === 'fr' ? detail.role : detail.roleEn}
                </p>
              </section>

              <section>
                <h2 className="detail-section__titre">{t.projetDetail.choix}</h2>
                <p className="detail-section__texte">
                  {lang === 'fr' ? detail.choix : detail.choixEn}
                </p>
              </section>

              <section>
                <h2 className="detail-section__titre">{t.projetDetail.visuels}</h2>
                <div className="detail-visuels">
                  <div className="detail-visuel-placeholder" style={{ backgroundColor: couleur }} aria-hidden="true" />
                  <div className="detail-visuel-placeholder" style={{ backgroundColor: couleur, opacity: 0.6 }} aria-hidden="true" />
                </div>
              </section>

              <section>
                <h2 className="detail-section__titre">{t.projetDetail.resultats}</h2>
                <p className="detail-section__texte">
                  {lang === 'fr' ? detail.resultats : detail.resultatsEn}
                </p>
              </section>

            </div>
          </div>
        </div>

        <ProjetNav precedent={precedent} suivant={suivant} />
      </main>
      <Footer />
    </>
  );
}
