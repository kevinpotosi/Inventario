import { useEffect, useState } from 'react'
import { getAllProduct } from '../api/product.api'
import { useNavigate} from 'react-router-dom';

export function Listproduct(){
    
    const [products, setProduct] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function loadProduct(){
            const res = await getAllProduct()
            setProduct(res.data)
        }
        loadProduct();
    }, []);
    return (
        <div>
        <h2>LISTA DE PRODUCTOS</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
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
            {products.map(product => (
              <tr key={product.pro_id}>
                <td>{product.pro_id}</td>
                <td>{product.pro_name}</td>
                <td>{product.pro_descripcion}</td>
                <td>{product.pro_iva ? 'Sí' : 'No'}</td>
                <td>{product.pro_cost}</td>
                <td>{product.pro_pvp}</td>
                <td>{product.pro_image}</td>
                <td>{product.pro_state ? 'Activo' : 'Inactivo'}</td>
                <td>{product.pro_stock}</td>
                <td><button onClick={()=>navigate('/create/'+product.pro_id)}>Editar</button><button>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Listproduct;
