const express = require("express");
const router = express.Router();
const url = "https://api.open-meteo.com/v1/forecast?";
const settings = "&timezone=GMT&daily=precipitation_sum"

const cities = {
    toronto: "latitude=43.70&longitude=-79.42",
    vancouver: "latitude=49.25&longitude=-123.12",
    montreal: "latitude=45.51&longitude=-73.59",
    calgary: "latitude=51.05&longitude=-114.09",
    hamilton: "latitude=43.25&longitude=-79.85",
    london: "latitude=42.98&longitude=-81.23",
    kitchener: "latitude=43.43&longitude=-80.51"
}

router.get("/weather/:city", (req, res) => {
    res.status(200).json({amount: `It has rained ${res.raining}mm in the last 24 hours in ${req.params.city}`});
})

router.param("city", async (req, res, next, city) => {
    try {
        const endpoint = url + cities[city] + settings;
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            let sums = 0;
            jsonResponse["daily"]["precipitation_sum"].forEach(element => sums += element);
            res.raining = sums;
            next();
        }
        else {
            res.status(400).json({error: "This city does not exist in the database."});
        }
    }
    catch(err) {
        res.status(400).send(err);
    }
})

module.exports = router;