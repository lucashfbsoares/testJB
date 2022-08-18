const Product = [];

const insertProduct = async (productData) => {
  const product = {
    ...productData,
    id: '62fda5ccef0c2eef2a0f9f5e',
  };
  Product.push(...Product, product);

  return product;
};

module.exports = {
  insertProduct,
};
