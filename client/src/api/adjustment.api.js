import axios from 'axios'

const adjustmentApi = axios.create({
    baseURL: 'https://inventario-phue.onrender.com/inventario/adjustment/'
})

export const getAllAdjustment = () => adjustmentApi.get('/')
export const getAdjustmentById = (id) => adjustmentApi.get(`/${id}/`)
export const createAdjustment = (adjustment) => adjustmentApi.post('/',adjustment)
export const updateAdjustment = (id,adjustment) => adjustmentApi.put(`/${id}/`,adjustment)
export const deleteAdjustment = (id) => adjustmentApi.delete(`/${id}/`)