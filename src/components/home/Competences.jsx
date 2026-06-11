import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import CompetenceCard from './CompetenceCard';
import { projets } from '../../data/projets';
import '../../styles/competences.css';

export default function Competences() {
  const { t, lang } = useLang();
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(prev => prev === id ? null : id);
  };

  const activeItem = t.competences.items.find(i => i.id === activeId);
  const projetsFiltres = activeId
    ? projets.filter(p => p.competences.includes(activeId))
    : [];

  return (
    <section className="competences" id="competences">
      <div className="container">
        <h2 className="competences__titre">{t.competences.titre}</h2>

        <div className="competences__grille">
          {t.competences.items.map(item => (
            <CompetenceCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {activeItem && (
          <div
            className="competences__panel"
            style={{ '--panel-color': activeItem.couleur }}
          >
            <p className="competences__panel-titre">
              {t.competences.projetsLies} — <em>{activeItem.label}</em>
            </p>
            <div className="competences__panel-grille">
              {projetsFiltres.map(p => {
                const titre = lang === 'fr' ? p.titre : p.titreEn;
                const desc = lang === 'fr' ? p.description : p.descriptionEn;
                return (
                  <Link
                    key={p.slug}
                    to={`/projets/${p.slug}`}
                    className="panel-card"
                  >
                    <div
                      className="panel-card__img"
                      style={{ backgroundColor: activeItem.couleur }}
                      aria-hidden="true"
                    />
                    <div className="panel-card__body">
                      <div className="panel-card__chips">
                        {p.domaines.map(cat => (
                          <span key={cat} className="chip panel-card__chip">{cat}</span>
                        ))}
                      </div>
                      <h4 className="panel-card__titre">{titre}</h4>
                      <p className="panel-card__desc">{desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
