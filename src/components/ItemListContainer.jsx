import { useEffect, useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos.");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="catalog-message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="catalog-message">{error}</p>;
  }

  return (
    <section className="catalog">
      <div className="catalog__heading">
        <span className="catalog__eyebrow">NUESTRO CATÁLOGO</span>
        <h2>Todo para tu día a día</h2>
        <p>Encontrá tus productos favoritos en One Market.</p>
      </div>

      <div className="catalog__grid">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;