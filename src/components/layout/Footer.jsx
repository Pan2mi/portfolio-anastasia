import { useLang } from '../../context/LanguageContext';
import '../../styles/footer.css';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__langues">{t.footer.langues}</p>
        <p className="footer__copy">© {year} Anastasia Villien</p>
      </div>
    </footer>
  );
}
