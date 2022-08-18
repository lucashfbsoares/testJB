const router = require('express').Router();

const { ensureValidProductId } = require('../middlewares/ensureValidProductId');

const {
  create, update, remove, show,
} = require('../controllers/productController');

// Criar rotas para o CRUD de produto
router.post('/users', create);
router.put('/users/:id', ensureValidProductId, update);
router.delete('/users/:id', ensureValidProductId, remove);
router.get('/users', show);

module.exports = router;
