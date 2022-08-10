//boilerplate para facilitar, localhost por padrão roda o index.*

const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( (req,res) => res.send("hello") )