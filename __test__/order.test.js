import Order from '../data/Order';
import handler from '../pages/api/order/index';

jest.mock('../database/mongo', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../data/Order', () => ({
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
  
    it('should return all Order on GET', async () => {
      const mockOrders= [{
        "order":["bob"],//change to actual order
        "total":30,
        "foodMode":"pickup",
        "phoneNumber":21111111,
        "paid":true
    }, {
        "order":["steve"],
        "total":31,
        "foodMode":"pickup",
        "phoneNumber":21111111,
        "paid":true
    }];
      Order.find.mockResolvedValue(mockOrders);
  
      req.method = 'GET';
  
      await handler(req, res);
  
      expect(Order.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockOrders);
    });
  
    it('should create a new product on POST', async () => {
      const mockOrder = {
        "order":["bob"],
        "total":30,
        "foodMode":"pickup",
        "phoneNumber":21111111,
        "paid":true
    };
      Order.create.mockResolvedValue(mockOrder);
  
      req.method = 'POST';
      req.body = mockOrder;
  
      await handler(req, res);
  
      expect(Order.create).toHaveBeenCalledWith(mockOrder);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockOrder);
    });
  
    it('should handle errors', async () => {
      const mockError = new Error('Test error');
      Order.find.mockRejectedValue(mockError);
  
      req.method = 'GET';
  
      await handler(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });

   


  });
  