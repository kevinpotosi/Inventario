import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/inventario/products/'
});

export const getAllProduct = () => productApi.get('/');
export const getProductById = (id) => productApi.get(`/${id}/`);

export const createProduct = (product) => {
  const formData = new FormData();
  // Agrega campos al formData según tu modelo
  formData.append('pro_name', product.pro_name);
  formData.append('pro_descripcion', product.pro_descripcion);
  formData.append('pro_iva', product.pro_iva);
  formData.append('pro_cost', product.pro_cost);
  formData.append('pro_pvp', product.pro_pvp);
  formData.append('pro_image', product.pro_image);
  formData.append('pro_state', product.pro_state);
  formData.append('pro_stock', product.pro_stock);

  return productApi.post('/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProduct = (id, product) => {
  const formData = new FormData();
  // Agrega campos al formData según tu modelo
  formData.append('pro_name', product.pro_name);
  formData.append('pro_descripcion', product.pro_descripcion);
  formData.append('pro_iva', product.pro_iva);
  formData.append('pro_cost', product.pro_cost);
  formData.append('pro_pvp', product.pro_pvp);
  formData.append('pro_image', product.pro_image); // Puede ser necesario verificar si la imagen cambió
  formData.append('pro_state', product.pro_state);
  formData.append('pro_stock', product.pro_stock);

  return productApi.put(`/${id}/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteProduct = (id) => productApi.delete(`/${id}/`);