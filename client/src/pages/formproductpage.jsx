import {useForm} from 'react-hook-form'
import {createProduct} from '../api/product.api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export function CreateProduct() {

    const {register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const res = await createProduct(data)
        console.log(res)        
        if (params.id){
          console.log("actualizando")
        }else{
          navigate("/")
        }
    })

    return( 
    <div>
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="pro_name">Nombre: </label>
        <input type="text" name="pro_name" required {...register("pro_name", {required: true})}/>        
        <br />

        <label htmlFor="pro_desc">Descripcion: </label>
        <input type="text" name="pro_desc" required {...register("pro_desc", {required: true})}/>        
        <br />

        <label htmlFor="pro_iva">IVA: </label>
        <input type="checkbox" name="pro_iva" required {...register("pro_iva", {required: true})}/>        
        <br />

        <label htmlFor="pro_cost">Costo: </label>
        <input type="number" name="pro_cost" step="0.1" min="0" required {...register("pro_cost", {required: true})}/>        
        <br />

        <label htmlFor="pro_pvp">PVP: </label>
        <input type="number" name="pro_pvp" step="0.1" min="0"required {...register("pro_pvp", {required: true})}/>        
        <br />

        <label htmlFor="pro_image">Image (URL): </label>
        <input type="text" name="pro_image" required {...register("pro_image", {required: true})}/>        
        <br />

        <label htmlFor="pro_state">Estado: </label>
        <input type="checkbox" name="pro_state" required {...register("pro_state", {required: true})}/>       
        <br />

        <button>Guardar</button>
      </form>
      <Link to="/"><button>Inicio</button></Link>
    </div>
    );
}

export default CreateProduct;