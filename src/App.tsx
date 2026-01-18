import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Experience from './components/Home/Experience';
import TechStack from './components/Home/TechStack';
// import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';
import MouseSpotlight from './components/Layout/MouseSpotlight';
import BackgroundEffect from './components/Layout/BackgroundEffect';
import Projects from './components/Home/Projects';
import Certifications from './components/Home/Certifications';
import SEOHead from './components/SEO/SEOHead';
import LanguageToast from './components/Layout/LanguageToast';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguageHTMLAttributes, useLanguageAnalytics } from './hooks/useLanguageEffects';

function AppContent() {
  useLanguageHTMLAttributes();
  useLanguageAnalytics();

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white">
      <SEOHead />
      <BackgroundEffect />
      <MouseSpotlight />
      <Navbar />
      <LanguageToast />
      <main className="container relative z-10 px-0 pt-14 md:px-0">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;