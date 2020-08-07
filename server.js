const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5000, () => {
  console.log('Server is running...');
});

server.get('/', (req, res) => {
  return res.render('site/index');
});

server.get('/product-details', (req, res) => {
  return res.render('site/product-details');
});