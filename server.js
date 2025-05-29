const express = require('express');
const path = require('path');
const DataWrapper = require('./utils/DataWrapper');

const app = express();
const PORT = 3000;

const dataWrapper = new DataWrapper(path.join(__dirname, 'data', 'products.json'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', (req, res) => {
  const products = dataWrapper.getProducts();
  res.json(products);
});


app.get('/', (req, res) => {
  res.redirect('/products');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
