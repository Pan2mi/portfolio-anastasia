import { useLang } from '../../context/LanguageContext';
import '../../styles/filtres.css';

export default function FiltreOnglets({
  mode, setMode,
  valeur, setValeur,
  optionsDomaine, optionsOutil,
}) {
  const { t } = useLang();

  return (
    <div className="filtres">
      {/* Onglets mode */}
      <div className="filtres__modes" role="tablist">
        <button
          role="tab"
          aria-selected={mode === 'domaine'}
          className={`filtres__mode${mode === 'domaine' ? ' active' : ''}`}
          onClick={() => { setMode('domaine'); setValeur('tous'); }}
        >
          {t.projets.filtreCompetence}
        </button>
        <button
          role="tab"
          aria-selected={mode === 'outil'}
          className={`filtres__mode${mode === 'outil' ? ' active' : ''}`}
          onClick={() => { setMode('outil'); setValeur('tous'); }}
        >
          {t.projets.filtreOutil}
        </button>
      </div>

      {/* Chips de filtre */}
      <div className="filtres__chips" role="group" aria-label="Filtres">
        <button
          className={`filtres__chip${valeur === 'tous' ? ' active' : ''}`}
          onClick={() => setValeur('tous')}
        >
          {t.projets.tous}
        </button>

        {(mode === 'domaine' ? optionsDomaine : optionsOutil).map(opt => (
          <button
            key={opt}
            className={`filtres__chip${valeur === opt ? ' active' : ''}`}
            onClick={() => setValeur(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
