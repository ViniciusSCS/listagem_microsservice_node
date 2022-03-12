const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!!');
})

app.get('/info', (req, res) => {
  res.json(
      {
          info1: [{
            nome: "Vinícius",
            dt_nasc: "22/01/1992"
          }],
      }
  );
})

app.post('/info', (req, res) => {
  var nome = req.body.info.nome
  var dt_nasc = req.body.info.dt_nasc
  data = {
    info: {
      nome: req.body.info.nome,
      dt_nasc: req.body.info.dt_nasc
    }
  }
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})