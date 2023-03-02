const express = require("express");
const app = express();
const sunRouter = require("./routes/sun");
const citiesRouter = require("./routes/cities");

const rain = 1000;
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/sky", sunRouter);
app.use("/", citiesRouter);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

async function getWeather(req, res, next) {
    try {
        const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&timezone=GMT&daily=precipitation_sum"
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            let sums = 0;
            jsonResponse["daily"]["precipitation_sum"].forEach(element => sums += element);
            if(sums > rain) {
                res.status(200).json({message: "It has rained too much in Toronto. Please come back later."});
            }
            else {
                next();
            }
        }
    }     
    catch(err) {
        res.status(400).json({error: err});
    }
}

app.get("/sky", getWeather, (req, res) => {
    console.log("Working");
    res.status(200).json({message: "", area: "sky", button: true, back: false, about: false, input: true});
})

app.post("/sky", getWeather, (req, res) => {
    console.log("Working");
    res.status(200).json({message: "", area: "sky", button: true, back: false, about: false, input: true});
})

app.get("/about", getWeather, (req, res) => {
    res.status(200).json({message: "", area: "", button: false, back: true, about: true, input: false});
})

app.post("/about", getWeather, (req, res) => {
    res.status(200).json({message: "", area: "", button: false, back: true, about: true, input: false});
})

app.get("/secret", getWeather, (req, res) => {
    res.status(200).json({message: "What are you doing here."});
})

app.post("/secret", getWeather, (req, res) => {
    res.status(200).json({message: "You solved the puzzle."});
})

exports.getWeather = getWeather;