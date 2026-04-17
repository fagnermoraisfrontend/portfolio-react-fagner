function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-content">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos conversar sobre tecnologia e novos projetos.</h2>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/fagnermoraisfrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/fagnermoraisfrontend
          </a>
          <a href="mailto:contato.fagner.dev@gmail.com">contato.fagner.dev@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
