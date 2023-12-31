import axios from 'axios'

const productApi = axios.create({
    baseURL: 'https://inventario-phue.onrender.com/inventario/products/'
})

export const getAllProduct = () => productApi.get('/')
export const getProductById = (id) => productApi.get(`/${id}/`)
export const createProduct = (product) => productApi.post('/', product)
export const updateProduct = (id, product) => productApi.put(`/${id}/`, product)
export const deleteProduct = (id) => productApi.delete(`/${id}/`)