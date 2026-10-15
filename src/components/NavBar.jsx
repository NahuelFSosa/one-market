import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link to="/" className="navbar__link">
          Inicio
        </Link>

        <Link to="/productos" className="navbar__link">
          Productos
        </Link>

        <Link to="/carrito" className="navbar__link">
          🛒 Carrito
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;