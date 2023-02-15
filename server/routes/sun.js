const express = require("express");
const router = express.Router();

router.route("/sun").get((req, res) => {
    res.status(200).json({area: "sky", question: true, button: false, back: false, about: false, input: false});
}).post((req, res) => {
    res.status(200).json({area: "sun", question: true, button: true, back: false, about: false, input: true});
    //res.json(req.body);
})

router.route("/sun/result").get((req, res) => {
    res.status(200).json({area: "sun", question: true, button: false, back: false, about: false, input: false});
}).post((req, res) => {
    if(req.body.colour.trim().toUpperCase() === "YELLOW") {
        res.status(200).json({message: "The password is 'bLuE'"});
    }
    else {
        res.status(200).json({message: "Incorrect."});
    }
})

module.exports = router;