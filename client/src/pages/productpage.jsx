import {Listproduct} from '../components/listproduct'
import { Link } from 'react-router-dom';
 
export function Productpage() {
    return (<div><h1>Menú</h1>
    <ul>
      <li><Link to="/create">Crear Producto</Link></li>
      <li><a href="#">Kardex</a></li>
    </ul>
        <Listproduct/>
    </div>
    );
}
