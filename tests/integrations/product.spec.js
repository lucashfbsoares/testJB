const {
  insertProduct,
} = require('../../src/repositories/productRepositoryInMemory');

describe('User', () => {
  it('should be able to create a new product', async () => {
    const product = {
      name: 'Default Product',
      color: '#FFFFFF',
      value: 1500.00,
    };

    const response = await insertProduct(product);

    expect(response).toEqual({
      id: '62fda5ccef0c2eef2a0f9f5e',
      name: 'Default Product',
      color: '#FFFFFF',
      value: 1500.00,
    });
  });
});
