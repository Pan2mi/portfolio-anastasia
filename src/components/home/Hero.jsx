import { useLang } from '../../context/LanguageContext';
import '../../styles/hero.css';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="hero">
      <div className="hero__col hero__col--left">
        <h1 className="hero__accroche">{t.hero.accroche}</h1>
      </div>
      <div className="hero__col hero__col--right">
        <p className="hero__paragraphe">{t.hero.paragraphe}</p>
        <span className="hero__tag chip">{t.hero.tag}</span>
      </div>
    </section>
  );
}
