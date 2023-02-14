const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/sun").get((req, res) => {
    res.status(200).json({area: "sun", question: true, button: true, back: false, about: false, input: true});
}).post((req, res) => {
    if(req.body.user === "hi") {
        res.json({hello: "happy"});
    }
    else {
        res.json({hello: "sad"});
    }
})

router.route("/sun/result").get((req, res) => {
    res.status(200).json({message: "What is the colour of the sun?"});
}).post((req, res) => {
    if(req.body.colour.trim().toUpperCase() === "YELLOW") {
        res.status(200).json({message: "The password is 'bLuE'"});
    }
    else {
        res.status(200).json({message: "Incorrect."});
    }
})

module.exports = router;