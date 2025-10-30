const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let citas = [];

app.get('/citas', (req, res) => {
  res.json(citas);
});

app.post('/citas', (req, res) => {
  const nuevaCita = req.body;
  citas.push(nuevaCita);
  res.status(201).json(nuevaCita);
});

app.listen(PORT, () => {
  console.log(`Servidor Moto Rápida corriendo en http://localhost:${PORT}`);
});
