import { useForm } from "react-hook-form";
import {
  createAdjustment,
  updateAdjustment,
  getAdjustmentById,
} from "../api/adjustment.api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function CreateAdjustment() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadAdjustment() {
      if (params.id) {
        const res = await getAdjustmentById(params.id);
        console.log(res);
        setValue("adj_id", res.data.adj_id);
        setValue("user_id", res.data.user_id);
        setValue("adj_date", res.data.adj_date);
        setValue("adj_description", res.data.adj_description);        
      }
    }
    loadAdjustment();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    try{
    if (params.id) {
      await updateAdjustment(params.id, data);
      toast.success("Ajuste Actualizado Correctamente");
    } else {
      await createAdjustment(data);
      toast.success("Ajuste Creado Correctamente");
    }
    navigate("/adjustment");
  }catch(error){
    toast.error("El ajuste no se creo "+error)
  }
  });
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    INVENTARIO
                  </a>
                  <a
                    href="/adjustment"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Ajustes
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Kardex
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center">
        {!params.id && (
          <h2 className="text-2xl font-bold mb-4">Crear Nuevo Ajuste</h2>
        )}
        {params.id && (
          <h2 className="text-2xl font-bold mb-4">Actualizar Ajuste</h2>
        )}
        <form className="w-full max-w-sm" onSubmit={onSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="user_id"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Usuario:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                name="user_id"
                required
                {...register("user_id", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="adj_date"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Fecha:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="date"
                name="adj_date"
                required
                {...register("adj_date", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="adj_description"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Descripcion:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                //rows={5}
                name="adj_description"
                required
                {...register("adj_description", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <Link to="/adjustment">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800">
                  &lt;- Inicio
                </button>
              </Link>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdjustment;