const express = require("express");
const router = express.Router();
const db = require("../db");
const server = require("../server");

//router.use(server.getWeather);

router.route("/sun").get((req, res) => {
    res.status(200).json({message: "", area: "sky", button: false, back: false, about: false, input: false});
}).post(async (req, res) => {
    try {
        //res.status(200).json({message: "", area: "sun", button: true, back: false, about: false, input: true});
        res.json(req.body);
    }
    catch(err) {
        res.status(400).json({error: err});
    }
})

router.route("/sun/result").get((req, res) => {
    res.status(200).json({message: "", area: "sun", button: false, back: false, about: false, input: false});
}).post((req, res) => {
    if(req.body.colour.trim().toUpperCase() === "YELLOW") {
        res.status(200).json({message: "The password is 'bLuE'"});
    }
    else {
        res.status(200).json({message: "Incorrect."});
    }
})

module.exports = router;