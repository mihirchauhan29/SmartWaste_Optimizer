const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Urban Waste Management Optimization API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
