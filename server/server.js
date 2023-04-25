const express = require('express')
const app = express()
const cohere = require('cohere-ai')

const cors = require('cors');
app.use(cors());
require('dotenv').config()
const cohereApiKey = process.env.COHERE_API_KEY;
cohere.init(cohereApiKey)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/question", (req,res) => {
    const question = req.body.question;

    (async () => {
        const response = await cohere.generate({
            model: 'command-xlarge-beta',
            prompt: `${question}`,
            max_tokens: 100,
            temperature: 0.8,
            k: 21,
            stop_sequences: [],
            return_likelihoods: 'NONE'
        });
            res.json(response.body.generations[0].text)
    })();
})

app.get("/api", (req, res) => {
    res.json({ "message": "Hello, world!" });
});

app.listen(5000, () => {console.log("Server started on port 5000")})