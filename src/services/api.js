//Configuração do meu Node na pasta ws - Web Server
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
});

export default api;


// import express, {request, response} from 'express';
// const api = express ();

// api.listen(4000,()=>console.log("servidor iniciado 4000"));
