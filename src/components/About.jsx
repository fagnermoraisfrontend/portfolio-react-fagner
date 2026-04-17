function About() {
  const skills = [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Node.js',
    'Git e GitHub',
    'SQL',
    'Power BI'
  ];

  return (
    <section id="sobre" className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Sobre mim</p>
          <h2>Perfil voltado para construção de soluções digitais claras e funcionais</h2>
        </div>

        <div className="about-grid">
          <article className="panel">
            <p>
              Tenho interesse em criar experiências digitais organizadas, responsivas
              e com boa apresentação visual. Meu foco é desenvolver projetos que
              transmitam profissionalismo, facilidade de navegação e identidade
              própria.
            </p>
            <p>
              Neste portfólio migrado para React, a estrutura foi separada em
              componentes reutilizáveis, permitindo manutenção mais simples, melhor
              leitura do código e crescimento gradual da aplicação.
            </p>
          </article>

          <aside className="panel">
            <h3>Tecnologias e competências</h3>
            <div className="tag-list">
              {skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
