import React from 'react';



const Login = () => {
    return (

        <div class="bg_filmes">

        <div class="container-fluid">

        <header class="row">
            <img src={require("../../assets/netflixlogo.png")} />
        </header>

        <div id="caixa_login" class="col-4 offset-4">
            <h1 class="text-white"> Entrar</h1>
            <br />
            <form>
                <input type="email" class="form-control form-control-lg" placeholder="E-mail ou número de telefone" />
                <br />
                <input type="password" class="form-control form-control-lg" placeholder="Senha" />
                <br />
                <button class="btn btn-lg btn-block btn-danger">Entada</button>
                <div class="col mt-4">
                    <a href="#" class="text-muted">Esqueceu a Senha?</a>
                </div>
            </form>
        </div>
    </div>
    </div>

    );
};

export default Login;