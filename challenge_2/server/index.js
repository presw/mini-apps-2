const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/api/currency/previousMonth/', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => {
      const { data } = response;
      res.send(data);
    })
    .catch((error) => console.log(error))
  });

app.listen(port, () => console.log(`Listening on port: ${port}`));
