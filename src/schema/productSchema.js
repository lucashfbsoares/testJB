const mongoose = require('../database');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
