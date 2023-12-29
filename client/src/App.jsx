import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Productpage} from './pages/productpage'
import {CreateProduct} from './pages/formproductpage'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Productpage/>}/>
                <Route path='/create' element={<CreateProduct/>}/>                
                <Route path='/create/:id' element={<CreateProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App