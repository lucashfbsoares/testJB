const { Product } = require('../schema/productSchema');

const insertProduct = async ({ name, color, value }) => {
  const product = await Product.create({
    name,
    color,
    value,
  });

  return product;
};

const removeProduct = async ({ productId }) => {
  const product = await Product.findByIdAndRemove(productId);

  if (!product) {
    throw new Error('Product does not exists');
  }
};

const updateProduct = async ({
  productId, name, color, value,
}) => {
  const product = await Product.findByIdAndUpdate(
    productId,
    {
      name,
      color,
      value,
    },
    { new: true },
  );

  if (!product) {
    throw new Error('Product does not exists');
  }

  await product.save();
  return product;
};

const showProduct = async () => {
  const products = await Product.find();
  return products;
};

module.exports = {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
};
