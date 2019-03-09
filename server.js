const express = require('express');
const app = express();
const PORT = 5000;

// Pretending this data comes for a db somewhere
const DATA = require('./rushing.json');

const search = (param) => {
  const testStr = new RegExp(`.*${param}.*`, 'gi')
  return DATA.filter(row => {
    if (row["Player"].search(testStr) === -1) {
      return false
    }
    return true
  })
}
const sortData = (arr, options) => {
  return [...arr].sort((a, b) => {
    a = a[options.prop].toString().replace(',', '')
    b = b[options.prop].toString().replace(',', '')
    if (options.order === 'ascending') {
      return a - b || a.localeCompare(b, undefined, {numeric: true})
    } else {
      return b - a || b.localeCompare(a, undefined, {numeric: true})
    }
  })
}

app.get('/api/all', (req, res) => {
  let returnData = DATA;
  
  if (req.query.search) {
    returnData = search(req.query.search)
  }
  
  if (req.query.order) {
    returnData = sortData(returnData, {...req.query})
  }
  
  res.send(returnData)
})

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
