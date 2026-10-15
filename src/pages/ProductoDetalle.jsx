import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductoDetalle() {
  const { id } = useParams();

  const [resultado, setResultado] = useState({
    id: null,
    producto: null,
    error: "",
    cargando: true
  });

  useEffect(() => {
    let activo = true;

    fetch("/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el catálogo.");
        }

        return respuesta.json();
      })
      .then((datos) => {
        const encontrado = datos.find(
          (elemento) => String(elemento.id) === id
        );

        if (!encontrado) {
          throw new Error("El producto solicitado no existe.");
        }

        if (activo) {
          setResultado({
            id,
            producto: encontrado,
            error: "",
            cargando: false
          });
        }
      })
      .catch((error) => {
        if (activo) {
          setResultado({
            id,
            producto: null,
            error: error.message,
            cargando: false
          });
        }
      });

    return () => {
      activo = false;
    };
  }, [id]);

  // Evita mostrar el producto anterior cuando cambia el ID.
  if (resultado.id !== id || resultado.cargando) {
    return <p className="catalog-message">Cargando producto...</p>;
  }

  if (resultado.error) {
    return (
      <section className="detail-page">
        <p>{resultado.error}</p>
        <Link to="/productos">Volver al catálogo</Link>
      </section>
    );
  }

  const producto = resultado.producto;

  return (
    <section className="detail-page">
      <div className="detail-page__image">
        <span role="img" aria-label={producto.categoria}>
          {producto.emoji}
        </span>
      </div>

      <div className="detail-page__content">
        <span className="item-card__category">
          {producto.categoria}
        </span>

        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>

        <p className="item-card__price">
          {producto.precio.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0
          })}
        </p>

        <Link to="/productos" className="item-card__button">
          Volver a productos
        </Link>
      </div>
    </section>
  );
}

export default ProductoDetalle;