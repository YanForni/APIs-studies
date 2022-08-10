const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())
            //post, put e patch são os parâmetros que aceitam o body
app.route('/').patch( (req,res) => {
    const {nome, cidade, livros_favoritos} = req.body
    // res.send(`Meu é ${nome}, eu nasci em ${cidade}`)
    res.send(livros_favoritos)
} )
