const cors = require('cors')
const express = require('express')
const app = express()

//liberando para qualquer servidor acessar
app.use(cors())

//Servido a API com a Criação da Rota
app.get('/', (req, res) => {
    return res.json([
        {name: 'ricardo'},
        {name: 'fernanda'}
    ])
})


app.listen ('4567')
