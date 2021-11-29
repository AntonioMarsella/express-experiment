const express = require("express")
const path = require("path");

const compliments = [
    "You look nice today",
    "That dress looks nice on you",
    "Have you been working out?"
];

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function(req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
});


app.use("/public", express.static("./public"));

app.listen(3000)

console.log("Listening on http://localhost:3000");
