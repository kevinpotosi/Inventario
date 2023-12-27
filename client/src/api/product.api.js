import axios from 'axios'

const productApi = axios.create({
    baseURL: 'http://localhost:8000/inventario/products/'
})

export const getAllProduct = () => productApi.get('/')
export const createProduct = (product) => productApi.post('/', product)
