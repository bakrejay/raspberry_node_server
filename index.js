const express = require('express')
const unitRout = require('./routes/DataUnits.js')
const controlUnit = require('./routes/ControlUnits.js')

const app = express();
app.use(express.json())

app.listen(4000)

app.get("/",(req,res) =>{
    console.log("Connected")
    res.send("Connected")
})

app.use("/units",unitRout)
app.use("/control",controlUnit)