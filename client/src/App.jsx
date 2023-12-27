import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import {Productpage} from './pages/productpage'
import {CreateProduct} from './pages/formproductpage'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Productpage/>}/>
                <Route path='/create' element={<CreateProduct/>}/>                
            </Routes>
        </BrowserRouter>
    )
}

export default App