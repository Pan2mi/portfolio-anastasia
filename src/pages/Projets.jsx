import { useState, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FiltreOnglets from '../components/projets/FiltreOnglets';
import ProjetCard from '../components/projets/ProjetCard';
import { projets } from '../data/projets';
import { useLang } from '../context/LanguageContext';
import '../styles/projets.css';

function unique(arr) {
  return [...new Set(arr)].sort();
}

export default function Projets() {
  const { t } = useLang();
  const [mode, setMode] = useState('domaine');
  const [valeur, setValeur] = useState('tous');

  // Options domaines : chaînes uniques triées issues des données projets
  const optionsDomaine = useMemo(
    () => unique(projets.flatMap(p => p.domaines)),
    []
  );

  const optionsOutil = useMemo(
    () => unique(projets.flatMap(p => p.outils)),
    []
  );

  const projetsFiltres = useMemo(() => {
    if (valeur === 'tous') return projets;
    if (mode === 'domaine') return projets.filter(p => p.domaines.includes(valeur));
    return projets.filter(p => p.outils.includes(valeur));
  }, [mode, valeur]);

  return (
    <>
      <Navbar />
      <main className="page-projets">
        <div className="container">
          <div className="page-projets__header">
            <h1 className="page-projets__titre">{t.projets.titre}</h1>
            <p className="page-projets__intro">{t.projets.intro}</p>
            <p className="page-projets__count">{projetsFiltres.length} projet{projetsFiltres.length > 1 ? 's' : ''}</p>
          </div>

          <FiltreOnglets
            mode={mode} setMode={setMode}
            valeur={valeur} setValeur={setValeur}
            optionsDomaine={optionsDomaine}
            optionsOutil={optionsOutil}
          />

          <div className="projets-grille">
            {projetsFiltres.length === 0 ? (
              <p className="projets-vide">Aucun projet pour ce filtre.</p>
            ) : (
              projetsFiltres.map(p => <ProjetCard key={p.slug} projet={p} />)
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
