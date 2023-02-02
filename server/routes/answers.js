const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message: "What is the colour of the sun?"});
}).post((req, res) => {
    if(req.body.colour.trim() === "bLuE") {
        res.status(200).render("secret");
    }
    else if(req.body.colour.trim().toUpperCase() === "BLUE") {
        res.status(200).render("sun");
    }
    else {
        res.status(200).json({message: "Incorrect."});
    }
})

router.route("/sky").get((req, res) => {
    res.status(200).json({message: "What is the colour of the sky?"});
}).post((req, res) => {
    if(req.body.colour.trim().toUpperCase() === "YELLOW") {
        res.status(200).json({message: "The password is 'bLuE'"});
    }
    else {
        res.status(200).json({message: "Incorrect."});
    }
})

module.exports = router;