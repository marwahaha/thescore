const express = require('express');
const app = express();
const PORT = 5000;

// Pretending this data comes for a db somewhere
const DATA = require('./rushing.json');

app.get('/api/all', (req, res) => res.send(DATA))

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
