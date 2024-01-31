import { useEffect, useState } from "react";
import { getAllAdjustment, deleteAdjustment } from "../api/adjustment.api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Listadjustment() {
  const [adjustments, setAdjustment] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searcher = (e) => { 
    setSearch(e.target.value);
    console.log(e.target);
  };

  useEffect(() => {
    async function loadAdjustment() {
      const res = await getAllAdjustment();
      setAdjustment(res.data);
    }
    loadAdjustment();
  }, []);

  let result = [];
  if (!search) {
    result = adjustments;
    console.log(result);
  } else {
    result = adjustments.filter((data) =>
      String(data.user_id).toLowerCase().includes(String(search).toLowerCase())
    );
    console.log(result);
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">LISTA DE AJUSTES</h2>
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
        <Link to="/create_adjustment" className="bg-blue-500">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800">
            Crear Ajuste +
          </button>
        </Link>
      </div>
      <br />
      <table className="border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nro.</th>
            <th className="border p-2">ID Ajuste</th>
            <th className="border p-2">Usuario</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Descripcion</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {result.map((adjustment, index) => (
            <tr
              key={adjustment.adj_id}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{adjustment.adj_id}</td>
              <td className="border p-2">{adjustment.user_id}</td>
              <td className="border p-2">{adjustment.adj_date}</td>
              <td className="border p-2">{adjustment.adj_description}</td>
              <td className="border p-2">
                <button
                  onClick={() =>
                    navigate("/create_adjustment/" + adjustment.adj_id)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800 mb-4"
                >
                  Editar
                </button>
                <button
                  onClick={async () => {
                    const state = window.confirm(`Desea eliminar el ajuste?`);
                    if (state) {
                      await deleteAdjustment(adjustment.adj_id);
                      window.location.reload();
                    } else {
                      navigate("../components/listproduct");
                    }
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 focus:outline-none focus:shadow-outline-gray active:bg-red-800 mb-4"
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

export default Listadjustment;
