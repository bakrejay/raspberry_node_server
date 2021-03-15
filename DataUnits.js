const express = require('express')
const route = express();
let tempUnit;
let turbUnit;
route.get("/",(req,res)=>{
    const unitJson = {
            "temp" : tempUnit,
            "turb" : turbUnit
        }
    console.log("unit reached")
    res.send(unitJson)
})
route.post("/",(req,res)=>{
    console.log(req.body)

    tempUnit = req.body.temp
    turbUnit = req.body.turb
    console.log(tempUnit)
    console.log(turbUnit)
    res.send("Post done")
})
module.exports = route