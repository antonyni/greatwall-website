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
    deleteOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
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
  it('should delete a product on DELETE', async () => {
    const mockProductId = 4;
    const mockDeletedProduct = { _id: mockProductId, name: 'Product 4' };
    Product.deleteOne.mockResolvedValue(mockDeletedProduct);
    
    req.method = 'DELETE';
    req.body = { _id: mockProductId };
    
    await handler(req, res);
    
    expect(Product.deleteOne).toHaveBeenCalledWith({ _id: mockProductId });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDeletedProduct);
    });

    it('should update a product on UPDATE', async () => {
      const mockProductId = 4;
      const mockUpdatedProduct = { id: mockProductId, name: 'Updated Product' };
      Product.findOneAndUpdate.mockResolvedValue(mockUpdatedProduct);
      
      req.method = 'UPDATE';
      req.body = { id: mockProductId, name: 'Updated Product' };
      
      await handler(req, res);
      
      expect(Product.findOneAndUpdate).toHaveBeenCalledWith(
      { id: mockProductId },
      { $set: req.body },
      { new: true }
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUpdatedProduct);
      });
});
