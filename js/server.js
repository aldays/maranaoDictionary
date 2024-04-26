const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/translate', async (req, res) => {
    const { from, dest, phrase } = req.query;
    const apiUrl = `https://glosbe.com/gapi/translate?from=${from}&dest=${dest}&format=json&phrase=${phrase}&pretty=true`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred during translation.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
