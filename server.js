const express = require ('express')

const app = express()
const port = 3000
const numOfBottles = 99

app.get('/',(req, res) =>{
        res.send(numOfBottles+" Bottles of beer on the wall<br><a href='/"+(numOfBottles-1)+"'>Take one down, pass it around </a>");
})
app.get('/:numOfBottles',(req, res) =>{
    let bottles = req.params.numOfBottles
    if(bottles> 0){
        
        res.send(bottles+" Bottles of beer on the wall<br><a href='/"+(bottles-1)+"'>Take one down, pass it around </a>");
    }else{
        res.send("<a href='/'>Home</a>")
    }
})
app.listen(port, () =>{
    console.log(`Server is listening on, ${port}`)
})

