const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const { generateBotResponse } = require("./functions/generateBotResponse");

const keyPath = path.join(__dirname, 'google_credentials.json');
process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/message/*", async (req, res) => {
    //Getting the user message
    const message = req.query.value;
    //Getting response from the AI and sending the user message
    const botResponse = await generateBotResponse("en", message, "1234abcd");

    //Sending the response message to the user
    return res.status(200).json({ message: botResponse });
});

app.listen(PORT, () => {
    console.log("App listens on port " + PORT);
});