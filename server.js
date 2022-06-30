// creating a route that the front-end can request data from. Here we require the data by adding the following code to the top of server.js
const { animals } = require('./data/animals');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();







//route
app.get('/api/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  function findById(id, animalsArray) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
    return result;
  }

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
