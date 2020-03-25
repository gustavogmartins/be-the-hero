const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Informa para o express que estamos utilizando json para as requisições
app.use(routes);

app.listen(3333);
