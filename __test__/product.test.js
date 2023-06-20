import handler from '../pages/api/product/index';
import Product from '../data/Product';

jest.mock('../database/mongo', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../data/Product', () => ({
  __esModule: true,
  default: {
    find: jest.fn(),
    create: jest.fn(),
  },
}));

describe('handler', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return all products on GET', async () => {
    const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    Product.find.mockResolvedValue(mockProducts);

    req.method = 'GET';

    await handler(req, res);

    expect(Product.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProducts);
  });

  it('should create a new product on POST', async () => {
    const mockProduct = { id: 3, name: 'Product 3' };
    Product.create.mockResolvedValue(mockProduct);

    req.method = 'POST';
    req.body = mockProduct;

    await handler(req, res);

    expect(Product.create).toHaveBeenCalledWith(mockProduct);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockProduct);
  });

  it('should handle errors', async () => {
    const mockError = new Error('Test error');
    Product.find.mockRejectedValue(mockError);

    req.method = 'GET';

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(mockError);
  });
});
