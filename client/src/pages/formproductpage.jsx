import { useForm } from "react-hook-form";
import {
  createProduct,
  updateProduct,
  getProductById,
} from "../api/product.api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function CreateProduct() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const res = await getProductById(params.id);
        console.log(res);
        setValue("pro_name", res.data.pro_name);
        setValue("pro_descripcion", res.data.pro_descripcion);
        setValue("pro_iva", res.data.pro_iva);
        setValue("pro_cost", res.data.pro_cost);
        setValue("pro_pvp", res.data.pro_pvp);
        setValue("pro_image", res.data.pro_image);
        setValue("pro_state", res.data.pro_state);
        setValue("pro_stock", res.data.pro_stock);
      }
    }
    loadProduct();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, data);
      toast.success("Producto Actualizado Correctamente");
    } else {
      await createProduct(data);
      toast.success("Producto Creado Correctamente");
    }
    navigate("/");
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
          <h2 className="text-2xl font-bold mb-4">Crear Nuevo Producto</h2>
        )}
        {params.id && (
          <h2 className="text-2xl font-bold mb-4">Actualizar Producto</h2>
        )}
        <form className="w-full max-w-sm" onSubmit={onSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_name"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Nombre:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="pro_name"
                required
                {...register("pro_name", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_descripcion"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Descripcion:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="pro_descripcion"
                required
                {...register("pro_descripcion", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_iva"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                IVA:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="checkbox"
                name="pro_iva"
                required
                {...register("pro_iva", { required: true })}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_cost"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Costo:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                name="pro_cost"
                step="0.1"
                min="0"
                required
                {...register("pro_cost", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_pvp"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                PVP:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                name="pro_pvp"
                step="0.1"
                min="0"
                required
                {...register("pro_pvp", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_image"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Image (URL):
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="pro_image"
                required
                {...register("pro_image", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_state"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Estado:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="checkbox"
                name="pro_state"
                required
                {...register("pro_state", { required: true })}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="pro_stock"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Stock:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                name="pro_stock"
                step="1"
                min="1"
                required
                {...register("pro_stock", { required: true })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <Link to="../components/listproduct">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-gray active:bg-blue-800">
                  &lt; Cancelar
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

export default CreateProduct;