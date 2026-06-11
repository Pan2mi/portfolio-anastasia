import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Competences from '../components/home/Competences';
import Parcours from '../components/home/Parcours';
import APropos from '../components/home/APropos';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Competences />
        <Parcours />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
