function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Portfólio em React</p>
          <h1>
            Soluções web com foco em organização, experiência do usuário e evolução
            contínua.
          </h1>
          <p className="hero-text">
            Sou Fagner Dias Morais. Atuo no desenvolvimento de interfaces e na
            construção de projetos que unem apresentação profissional, lógica de
            programação e visão prática para o mercado de tecnologia.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Ver projetos
            </a>
            <a
              className="button secondary"
              href="https://github.com/fagnermoraisfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <span className="status-badge">Disponível para oportunidades</span>
          <h2>Resumo profissional</h2>
          <ul className="info-list">
            <li>Formado em Análise e Desenvolvimento de Sistemas</li>
            <li>Estudante de Tecnologia de Sistemas para a Internet</li>
            <li>Interesse em desenvolvimento web, back-end e dados</li>
            <li>Projetos com HTML, CSS, JavaScript e React</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
