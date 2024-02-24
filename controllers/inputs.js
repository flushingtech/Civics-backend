const Input = require('../models/input');


async function getInput (req, res) {
    try {
        const inputs = await Input.find({});

        return res.status(200).json(inputs);
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }

}

async function createInput (req, res) {
    try {

        console.log(req.body)
        const { neighborhood, issue, text } = req.body;

        if (!neighborhood || !issue || !text) return res.status(404).json({ message: 'Bad request' });

        const input = await Input.create({
            neighborhood,
            issue,
            text
        });

        const responseText = `Neighborhood: ${input.neighborhood}\nIssue: ${input.issue}\nDetails: ${input.text}`;

        return res.status(201).send(responseText);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {getInput, createInput}