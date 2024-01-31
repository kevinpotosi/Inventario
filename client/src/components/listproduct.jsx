import { useEffect, useState } from "react";
import { getAllProduct, deleteProduct } from "../api/product.api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Listproduct() {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [ascending, setAscending] = useState(true);
  const navigate = useNavigate();

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProduct();
      setProduct(res.data);
    }
    loadProduct();

    fetch("http://localhost:8001")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  let result = [];
  if (!search) {
    result = products;
  } else {
    result = products.filter((data) =>
      data.pro_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleSort = () => {
    setAscending(!ascending);
    setProduct([...result].sort((a, b) => {
      const nameA = a.pro_name.toLowerCase();
      const nameB = b.pro_name.toLowerCase();
      return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">LISTA DE PRODUCTOS</h2>
      <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          className="border p-2 mr-2"
          placeholder="Buscar..."
          name="buscar"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800">
          Buscar
        </button>
      </div>
      <br />
      <div>
        <Link to="/create" className="bg-blue-500">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800">
            Crear Producto +
          </button>
        </Link>
      </div>
      <br />
      <table className="border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Acciones</th>
            <th
              
              
            >
              Nro
            </th>
            <th className="border p-2 cursor-pointer" onClick={handleSort}>
              Nombre{" "}
              {ascending ? "▲" : "▼"}
            </th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">IVA</th>
            <th className="border p-2">Costo</th>
            <th className="border p-2">PVP</th>
            <th className="border p-2">Imagen</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {result.map((product, index) => (
            <tr
              key={product.pro_id}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="border p-2">
                <button
                  onClick={() => navigate("/create/" + product.pro_id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800 mb-4"
                >
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
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 focus:outline-none focus:shadow-outline-gray active:bg-red-800 mb-4"
                >
                  Eliminar
                </button>
              </td>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{product.pro_name}</td>
              <td className="border p-2">{product.pro_descripcion}</td>
              <td className="border p-2">{product.pro_iva ? "Sí" : "No"}</td>
              <td className="border p-2">{product.pro_cost}</td>
              <td className="border p-2">{product.pro_pvp}</td>
              <td className="border p-2">{product.pro_image}</td>
              <td className="border p-2">
                {product.pro_state ? "Activo" : "Inactivo"}
              </td>
              <td className="border p-2">{product.pro_stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listproduct;