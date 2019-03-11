const express = require('express');

const app = express();
const PORT = 5000;

// Pretending this data comes from a db somewhere
const DATA = require('./rushing.json');

// Function to filter list by player name
const search = (param) => {
  const testStr = new RegExp(`.*${param}.*`, 'gi');
  return DATA.filter((row) => {
    if (row.Player.search(testStr) === -1) {
      return false;
    }
    return true;
  });
};

// Function to sort data (ASC or DESC) depending on prop passed in.
// Use a spread here to not mutate original array
const sortData = (arr, options) => [...arr].sort((a, b) => {
  // Find the item we want to sort by, force it into a string (because some data is numbers) and remove commas
  a = a[options.prop].toString().replace(',', '');
  b = b[options.prop].toString().replace(',', '');
  if (options.order === 'ascending') {
    // First sort by the number value, then sort by the char code (this solves the trailing T char and the negative string problem)
    return a - b || a.localeCompare(b, undefined, { numeric: true });
  }
  return b - a || b.localeCompare(a, undefined, { numeric: true });
});


app.get('/api/all', (req, res) => {
  // Set our initial return value to be the whole array as is
  let returnData = DATA;

  // If we have a search query filter our list
  if (req.query.search) {
    returnData = search(req.query.search);
  }

  // If we have a sort query, sort our list
  if (req.query.order) {
    returnData = sortData(returnData, { ...req.query });
  }

  // Send data back to client
  res.send(returnData);
});

// Start server
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
