import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-content">
          <a className="brand" href="#inicio">
            Fagner Dias Morais
          </a>
          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <ProjectsSection projects={projects} />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
