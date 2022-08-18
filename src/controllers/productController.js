const {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
} = require('../repositories/productRepository');

const create = async (req, res) => {
  try {
    const { name, color, value } = req.body;

    const product = await insertProduct({ name, color, value });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, color, value } = req.body;

    const product = await updateProduct({
      productId, name, color, value,
    });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const productId = req.params.id;
    await removeProduct({ productId });

    return res.status(200).send();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const products = await showProduct();
    return res.send({ products });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  update,
  remove,
  show,
};
