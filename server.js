const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

//liberando para qualquer servidor acessar
app.use(cors())

const numberApi_key = '4b944c7993f0443e66998d3be57c7581'

//Servido a API com a Criação da Rota
app.get('/', async (req, res) => {

    try {
        // response é a resposta do axios MAS eu tiro a data de dentro do response
        const { data } = await axios('https://api.themoviedb.org/3/movie/550?api_key=4b944c7993f0443e66998d3be57c7581')
        //console.log(data)
        return res.json(data)

    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')
