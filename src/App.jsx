import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Projets from './pages/Projets';
import ProjetDetail from './pages/ProjetDetail';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
