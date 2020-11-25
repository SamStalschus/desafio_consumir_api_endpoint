const cors = require('cors')//requisitar o cors p liberar o acesso a API
const express = require('express') //pega o express instalado
const app = express() //inicia o express na variável app
const axios = require('axios')

app.use(cors())

//rota em que a pessoa informa a rua e obtem todo o endereço
app.get('/:rua', async(req, res) =>{

    const rua = req.params.rua

    try {
    //pega apenas o data da resposta(response), ou seja apenas os dados
        const { data }  = await axios('https://viacep.com.br/ws/GO/Goiania/'+ rua +'/json/')
        //const { data }  = await axios('https://viacep.com.br/ws/'+ rua +'/json/')
        
        return res.json( data )

    } catch (error) {
        console.log(error)
    }

})

//ouvinte para ouvir a porta 3008
app.listen('3008') 
