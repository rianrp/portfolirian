import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import TechStack from './components/Home/TechStack';
import Contact from './components/Home/Contact';
import Projects from './components/Home/Projects';
import About from './components/Home/About';
import FAQ from './components/Home/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-neo text-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
