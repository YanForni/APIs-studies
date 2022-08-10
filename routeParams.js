const express = require('express')

const app = express()

app.listen('3000')

// sem route params
app.route('/').get( (req,res) => res.send("hello") )

// com route params
app.route('/:variable').get( (req,res) => res.send(req.params.variable) )
app.route('/id/:name').get( (req,res) => res.send(req.params.name) )

