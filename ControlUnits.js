const express = require('express')

const route = express();

let mainMotor
let injectMotor
let leftDirection
let rightDirection
let upDirection
let downDirection

route.get("/",(req,res)=>{
    const controlJson = {
        "mainMotor" : mainMotor,
        "injectMotor" : injectMotor,
        "leftDirection" : leftDirection,
        "rightDirection" : rightDirection,
        "upDirection" : upDirection,
        "downDirection" : downDirection
    }
    res.send(controlJson)
    console.log("Done")
})

route.post("/",(req,res)=>{
    mainMotor = req.body.mainMotor
    injectMotor = req.body.injectMotor
    leftDirection = req.body.leftDirection
    rightDirection = req.body.rightDirection
    upDirection = req.body.upDirection
    downDirection = req.body.downDirection
    console.log(req.body)
    res.send("Control Unit Updated")
})

module.exports = route