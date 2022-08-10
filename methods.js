const express = require('express')

const app = express()

app.listen('3000')


//método get

// app.route('/').get( (req,res)=> res.send("hello") )
// app.route('/sobre').get( (req,res)=> res.send("hello sobre") )


//método post

// app.use(express.json())
// app.route('/').post( (req,res) => res.send(req.body) )


//método put

// app.use(express.json())
// let author = "Nay"
// app.route('/').get( (req,res)=> res.send(author) )
// app.route('/').put( (req,res) => {
//     author = req.body
// })
//     res.send(author)


//método delete

let author = "Yan"
app.route('/:identifier').delete( (req, res) => {
    res.send(req.params.identifier)
} )