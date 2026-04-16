import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
