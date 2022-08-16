const router = require('express').Router();

const {
  create, update, remove, show,
} = require('../controllers/productController');

// Criar rotas para o CRUD de produto

module.exports = router;
