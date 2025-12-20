import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Experience from './components/Home/Experience';
import TechStack from './components/Home/TechStack';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';
import MouseSpotlight from './components/Layout/MouseSpotlight';
import BackgroundEffect from './components/Layout/BackgroundEffect';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white overflow-hidden">
      <BackgroundEffect />
      <MouseSpotlight />
      <Navbar />
      <main className="container relative z-10 px-6 pt-24 md:px-0 mx-auto">
        <Hero />
        <TechStack />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
