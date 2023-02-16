const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.route("/sun").get((req, res) => {
    res.status(200).json({area: "sky", question: true, button: false, back: false, about: false, input: false});
}).post(async (req, res) => {
    //res.status(200).json({area: "sun", question: true, button: true, back: false, about: false, input: true});
    try {
        res.json(req.body);
    }
    catch(err) {
        res.status(400).json({error: err});
    }
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