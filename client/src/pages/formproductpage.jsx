import {useForm } from 'react-hook-form'
import {createProduct, updateProduct, getProductById} from '../api/product.api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function CreateProduct() {

    const {register, handleSubmit, setValue} = useForm()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
      async function loadProduct(){
        if(params.id){
          const res = await getProductById(params.id)
          console.log(res)
          setValue('pro_name', res.data.pro_name)
          setValue("pro_descripcion", res.data.pro_descripcion)
          setValue("pro_iva", res.data.pro_iva)
          setValue("pro_cost", res.data.pro_cost)
          setValue("pro_pvp", res.data.pro_pvp)
          setValue("pro_image", res.data.pro_image)
          setValue("pro_state", res.data.pro_state)
        }
      }
      loadProduct()
    }, [])

    const onSubmit = handleSubmit(async data => {
      if(params.id){
        await updateProduct(params.id, data)
      }else{
        await createProduct(data)
      }
        navigate("/")
    })
    return( 
    <div>
      {!params.id &&<h2>Crear Nuevo Producto</h2>}      
      {params.id && <h2>Actualizar Producto</h2>}
      <form onSubmit={onSubmit}>
        <label htmlFor="pro_name">Nombre: </label>
        <input type="text" name="pro_name" required {...register("pro_name", {required: true})}/>        
        <br />

        <label htmlFor="pro_descripcion">Descripcion: </label>
        <input type="text" name="pro_descripcion" required {...register("pro_descripcion", {required: true})}/>        
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