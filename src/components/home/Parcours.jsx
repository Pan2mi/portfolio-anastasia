import { useLang } from '../../context/LanguageContext';
import { parcours } from '../../data/parcours';
import '../../styles/parcours.css';

function TimelineItem({ periode, titre, lieu }) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__periode">{periode}</span>
      <strong className="timeline-item__titre">{titre}</strong>
      {lieu && <span className="timeline-item__lieu">{lieu}</span>}
    </li>
  );
}

export default function Parcours() {
  const { t, lang } = useLang();

  return (
    <section className="parcours" id="parcours">
      <div className="container">
        <h2 className="parcours__titre">{t.parcours.titre}</h2>
        <div className="parcours__grille">

          <div className="parcours__col">
            <h3 className="parcours__col-titre">{t.parcours.colonnes.experiences}</h3>
            <ul className="timeline">
              {parcours.experiences.map((item, i) => (
                <TimelineItem
                  key={i}
                  periode={lang === 'fr' ? item.periode : item.periodeEn}
                  titre={lang === 'fr' ? item.poste : item.posteEn}
                  lieu={item.lieu}
                />
              ))}
            </ul>
          </div>

          <div className="parcours__col">
            <h3 className="parcours__col-titre">{t.parcours.colonnes.formation}</h3>
            <ul className="timeline">
              {parcours.formation.map((item, i) => (
                <TimelineItem
                  key={i}
                  periode={lang === 'fr' ? item.periode : item.periodeEn}
                  titre={lang === 'fr' ? item.diplome : item.diplomeEn}
                  lieu={item.lieu}
                />
              ))}
            </ul>
          </div>

          <div className="parcours__col">
            <h3 className="parcours__col-titre">{t.parcours.colonnes.engagement}</h3>
            <ul className="timeline">
              {parcours.engagement.map((item, i) => (
                <TimelineItem
                  key={i}
                  periode={lang === 'fr' ? item.periode : item.periodeEn}
                  titre={lang === 'fr' ? item.role : item.roleEn}
                  lieu={item.lieu}
                />
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
