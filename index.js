const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Hello World!!');
})

app.get('/info', (req, res) => {
  res.json(
      {
          info1: "Teste",
          info2: "Outro Teste"
      }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})