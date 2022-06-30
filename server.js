// creating a route that the front-end can request data from. Here we require the data by adding the following code to the top of server.js
const { animals } = require('./data/animals');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();







//route
app.get('/api/animals', (req, res) => {
    res.send('Hello!');
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
