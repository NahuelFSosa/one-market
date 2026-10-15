const equipo = [
  {
    nombre: "Sofía Martínez",
    rol: "Gerente comercial",
    descripcion: "Coordina las ofertas y la experiencia de compra."
  },
  {
    nombre: "Lucas Fernández",
    rol: "Responsable de logística",
    descripcion: "Organiza el abastecimiento y la distribución."
  },
  {
    nombre: "Valentina López",
    rol: "Atención al cliente",
    descripcion: "Ayuda a nuestros clientes a encontrar lo que necesitan."
  }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__brand">
          <h2>One Market</h2>
          <p>
            Tu supermercado de confianza.
            Encontrá todo lo que necesitás en un solo lugar.
          </p>
        </section>

        <section className="footer__section">
          <h3>Información</h3>
          <a href="#privacidad">Política de privacidad</a>
          <a href="#terminos">Términos y condiciones</a>
          <a href="#propiedad">Propiedad intelectual</a>
        </section>

        <section className="footer__section">
          <h3>Contacto y sucursales</h3>
          <p>Correo: contacto@onemarket.com</p>
          <p>Atención: lunes a sábados</p>
          <p>Sucursales: próximamente</p>
        </section>

        <section className="footer__section">
          <h3>Newsletter</h3>
          <p>Enterate de nuestras novedades y ofertas.</p>

          <form
            className="footer__newsletter"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email">
              Tu correo electrónico
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="nombre@correo.com"
              required
            />

            <button type="submit">Suscribirme</button>
          </form>
        </section>
      </div>

      <section className="footer__team">
        <h3>Conocé a nuestro equipo</h3>

        <div className="footer__team-grid">
          {equipo.map((persona) => (
            <article
              className="team-card"
              key={persona.nombre}
            >
              <div className="team-card__avatar">
                {persona.nombre.charAt(0)}
              </div>

              <h4>{persona.nombre}</h4>
              <p className="team-card__role">{persona.rol}</p>
              <p>{persona.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} One Market.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;