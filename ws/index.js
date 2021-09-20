const express = require('express');
const cors = require ('cors')
const app = express();

app.use(cors());

//Recupero todo os registro
app.get('/', (req,res) => {
    //regra de negócio
    res.json({mensagem: "PEGAR TODOS OS REGISTROS"});
});

// pEGAR sOMENTE O REGISTRO COM O id
app.get('/:id', (req, res)=> {
    const id = req.params.id;
    res.json({mensagem: 'PEGAR SOMENTE O REGISTRO COM O ID: ${id}'});
});

// CRIAR UM REGISTRO
app.post('/', (req, res)=> {
    const body = req.body;
    res.json({mensagem: 'Criar usuário'});
});

//Atualizar Somente o Registro do ID
app.put('/:id', (req, res)=> {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR SOMENTE O RESGISTR COM O id: ${id}`});
});

//Deletar somente o registro com ID
app.delete ('/:id', (req, res)=> {
    const id = req.params.id;
    res.json({mensagem: `DELETAR SOMENTE O RESGISTR COM O id: ${id}`});

});

app.listen(4000,() => {
    console.log('Meu servidor está funcionando');
});

//=====================================






