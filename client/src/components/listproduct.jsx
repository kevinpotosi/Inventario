import { useEffect, useState } from "react";
import {
  getAllProduct,
  deleteProduct
} from "../api/product.api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Listproduct() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  const { register ,handleSubmit } = useForm();

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProduct();
      setProduct(res.data);
    }
    loadProduct();
  }, []);

  const onSubmit = handleSubmit(async(data) => {
    console.log(data.buscar)
  });

  return (
    <div>
      <h2>LISTA DE PRODUCTOS</h2>
      <form onSubmit={onSubmit}>
        <input type="text" className="search-input" placeholder="Buscar..." name="buscar" {...register("buscar")}/>
        <button className="search-button">Buscar</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>Nro.</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>IVA</th>
            <th>Costo</th>
            <th>PVP</th>
            <th>Imagen</th>
            <th>Estado</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.pro_id}>
              <td>{index + 1}</td>
              <td>{product.pro_name}</td>
              <td>{product.pro_descripcion}</td>
              <td>{product.pro_iva ? "Sí" : "No"}</td>
              <td>{product.pro_cost}</td>
              <td>{product.pro_pvp}</td>
              <td>{product.pro_image}</td>
              <td>{product.pro_state ? "Activo" : "Inactivo"}</td>
              <td>{product.pro_stock}</td>
              <td>
                <button onClick={() => navigate("/create/" + product.pro_id)}>
                  Editar
                </button>
                <button
                  onClick={async () => {
                    const state = window.confirm(
                      `Desea eliminar ${product.pro_name}`
                    );
                    if (state) {
                      await deleteProduct(product.pro_id);
                      window.location.reload();
                    } else {
                      navigate("/");
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listproduct;
