import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 8001;

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://facturacion-3p4mdakbqa-uc.a.run.app/modulo_facturacion/get_invoice_details/');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener datos del servidor externo' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

const facturaApi = axios.create({
  baseURL:'http://localhost:8001'
})

export const getAllFacturas = () => facturaApi.get('/')