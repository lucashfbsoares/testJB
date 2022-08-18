const mongoose = require('mongoose');

function ensureValidProductId(req, res, next) {
  const productId = req.params.id;

  const isValidId = mongoose.Types.ObjectId.isValid(productId);

  if (!isValidId) {
    return res.status(401).json({ error: 'Invalid product id' });
  }

  return next();
}

module.exports = { ensureValidProductId };
