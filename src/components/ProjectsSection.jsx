const isValidUrl = (value) => {
  if (!value) {
    return false;
  }

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

function ProjectsSection({ projects = [] }) {
  const safeProjects = projects.filter(
    (project) =>
      project &&
      typeof project.id !== 'undefined' &&
      project.title &&
      project.description
  );

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projetos</p>
          <h2>Projetos renderizados dinamicamente a partir de um array de objetos</h2>
          <p>
            A seção abaixo foi construída com renderização dinâmica em React,
            atendendo ao requisito de exibir os projetos a partir de dados
            estruturados em JavaScript.
          </p>
        </div>

        {safeProjects.length > 0 ? (
          <div className="projects-grid">
            {safeProjects.map((project) => {
              const stack = Array.isArray(project.stack) ? project.stack : [];
              const hasRepository = isValidUrl(project.repository);
              const hasDemo = isValidUrl(project.demo);

              return (
                <article key={project.id} className="project-card">
                  <div className="project-top">
                    <span className="project-category">
                      {project.category || 'Projeto'}
                    </span>
                    <h3>{project.title}</h3>
                  </div>

                  <p>{project.description}</p>

                  {stack.length > 0 && (
                    <ul className="project-stack">
                      {stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {(hasRepository || hasDemo) && (
                    <div className="project-links">
                      {hasRepository && (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repositório
                        </a>
                      )}
                      {hasDemo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demonstração
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state panel">
            <h3>Projetos em atualização</h3>
            <p>
              Os projetos não puderam ser carregados no momento. Atualize os dados
              em <code>src/data/projects.js</code> para exibi-los aqui.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
