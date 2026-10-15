import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <article className="item-card">
      <div className="item-card__image">
        <span role="img" aria-label={producto.categoria}>
          {producto.emoji}
        </span>
      </div>

      <div className="item-card__content">
        <span className="item-card__category">
          {producto.categoria}
        </span>

        <h3>{producto.nombre}</h3>

        <p className="item-card__price">
          {producto.precio.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0
          })}
        </p>

        <Link
          to={`/producto/${producto.id}`}
          className="item-card__button"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}

export default Item;