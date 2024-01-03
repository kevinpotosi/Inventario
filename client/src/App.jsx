import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Productpage} from './pages/productpage'
import {CreateProduct} from './pages/formproductpage'
import { Adjustmentpage } from './pages/adjustmentpage'
import { CreateAdjustment } from './pages/formadjustmentpage'
import {Toaster} from 'react-hot-toast'
 
function App(){
    return(
        <div className='m-0, w-full, h-full'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Productpage/>}/>
                <Route path='/create' element={<CreateProduct/>}/>                
                <Route path='/create/:id' element={<CreateProduct/>}/>
                <Route path='/adjustment' element={<Adjustmentpage/>}/>
                <Route path='/create_adjustment' element={<CreateAdjustment/>}/>
                <Route path='/create_adjustment/:id' element={<CreateAdjustment/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
        </div>
    )
}

export default App