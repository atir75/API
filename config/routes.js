const express = require(`express`)
const routes = express.Router()



let db = [
    { '1': {Nome: `Cliente 1`, Idade: `35`} },
    { '2': {Nome: `Cliente 2`, Idade: `20`} },
    { '3': {Nome: `Cliente 3`, Idade: `25`} },
    { '4': {Nome: `Cliente 4`, Idade: `60`} },
    { '5': {Nome: `Cliente 5`, Idade: `26`} }
]

//buscar dados 
routes.get(`/`, (req, res) => {
    return res.json({db})
})


//inserir dados 
routes.post(`/`, (req, res) => {
    const body = req.body

    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})


routes.delete(`/:id`, (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item =>{ //pegando o banco e filtrando para retornar onde o id for diferente do parametro
        if(!item[id])
        return item
    })
    db = newDB

    return res.send(newDB)
})



module.exports = routes



