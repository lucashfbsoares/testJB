const Product = [];

const insertProduct = async (productData) => {
  const product = {
    ...productData,
    id: '62fda5ccef0c2eef2a0f9f5e',
  };
  Product.push(...Product, product);

  return product;
};

const removeProduct = async ({ productId }) => {
  const product = await Product.findByIdAndRemove(productId);

  if (!product) {
    throw new Error('Product does not exists');
  }
};

const updateProduct = async (productId, productData) => {
  const product = await Product.findByIdAndUpdate(
    productId,
    productData,
  );

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
