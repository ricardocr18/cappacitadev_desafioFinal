import { responsiveFontSizes } from '@material-ui/core';
import React, {useState } from 'react';
import api from '../../services/api';



const Login = () => {    
    const [credenciais, setCredenciais] = useState({
        email:'',
        senha:'',
    });
           
    const login = async () => {         
         try {
            const response = await api.post('usuario/login', credenciais );
            console.log(response)

         }         
         catch(error) {
             alert(error.message);
         }
    };

    // const login = () => {
    //     console.log(credenciais);
    // }
    
    
    return (

        <div class="bg_filmes">

        <div class="container-fluid">

        <header class="row">
            <img src={require("../../assets/netflixlogo.png")} />
        </header>

        <div id="caixa_login" class="col-4 offset-4">
            <h1 class="text-white"> Entrar</h1>
            <br />
            <>

                <input type="email" class="form-control form-control-lg"
                placeholder="E-mail ou número de telefone"
                onChange={(e) => {
                    setCredenciais({
                        ...credenciais,
                        email:e.target.value,
                    });
                }} />
                <br />

                <input type="password" class="form-control form-control-lg"
                 placeholder="Senha"
                 onChange={(e) => {
                    setCredenciais({
                        ...credenciais,
                        senha:e.target.value,
                    });
                 }} />
                <br />

                <button class="btn btn-lg btn-block btn-danger"
                onClick={login}>Entada</button>
                <div class="col mt-4">
                    <a href="#" class="text-muted">Esqueceu a Senha?</a>
                </div>

            </>
        </div>
    </div>
    </div>

    );
};

export default Login;