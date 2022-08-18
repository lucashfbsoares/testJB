const router = require('express').Router();

const { ensureValidProductId } = require('../middlewares/ensureValidProductId');

const {
  create, update, remove, show,
} = require('../controllers/productController');

// Criar rotas para o CRUD de produto
router.post('/product', create);
router.put('/product/:id', ensureValidProductId, update);
router.delete('/product/:id', ensureValidProductId, remove);
router.get('/product', show);

module.exports = router;
