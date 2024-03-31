const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db');

app.get('/aboutData', async (req, res) => {
    try {
        const aboutData = await db.getAboutData();
        res.json(aboutData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add other routes as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
