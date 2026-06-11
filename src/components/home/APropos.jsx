import { useLang } from '../../context/LanguageContext';
import '../../styles/apropos.css';

export default function APropos() {
  const { t } = useLang();

  return (
    <section className="apropos" id="apropos">
      <div className="container apropos__inner">
        <div className="apropos__citation-bloc">
          <blockquote className="apropos__citation">
            {t.apropos.citation}
          </blockquote>
        </div>
        <div className="apropos__texte-bloc">
          <h2 className="apropos__titre">{t.apropos.titre}</h2>
          {t.apropos.texte.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
