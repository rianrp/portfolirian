import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Experience from './components/Home/Experience';
import TechStack from './components/Home/TechStack';
import Contact from './components/Home/Contact';
import Projects from './components/Home/Projects';
import Certifications from './components/Home/Certifications';
import SEOHead from './components/SEO/SEOHead';
import LanguageToast from './components/Layout/LanguageToast';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguageHTMLAttributes, useLanguageAnalytics } from './hooks/useLanguageEffects';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  useLanguageHTMLAttributes();
  useLanguageAnalytics();

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-primary">
      <SEOHead />
      <Navbar />
      <LanguageToast />
      <main className="relative z-10">
        <Hero />
        <div className="relative z-20 bg-background">
          <Projects />
          <Experience />
          <TechStack />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
