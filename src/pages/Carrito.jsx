import { Link } from "react-router-dom";

function Carrito() {
  return (
    <section className="carrito-page">
      <h2>Tu carrito</h2>
      <p>
        La funcionalidad de compra se incorporará
        en la entrega final.
      </p>

      <Link to="/productos">
        Seguir explorando productos
      </Link>
    </section>
  );
}

export default Carrito;