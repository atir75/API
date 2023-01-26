const express = require(`express`)
const morgan = require(`morgan`)
const cors = require(`cors`)
const bodyParser = require (`body-Parser`) //chamada dos pacotes e atribuindo as var, as variaveis serão do tipo do meu pacote 

const app = express()

app.use(morgan(`dev`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:21262`)
})