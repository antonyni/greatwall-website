import handler from '../pages/api/section/index';
import Section from '../data/Section';
import Order from '../data/Order';

// jest.mock('../database/mongo', () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));

jest.mock('../data/Order', () => ({
  __esModule: true,
  default: {
    find: jest.fn(),
    create: jest.fn(),
  },
}));



jest.mock('../database/mongo', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../data/Section', () => ({
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

  it('should return all sections on GET', async () => {
    const mockSections = [{ id: 1, name: 'Section 1' }, { id: 2, name: 'Section 2' }];
    Section.find.mockResolvedValue(mockSections);

    req.method = 'GET';

    await handler(req, res);

    expect(Section.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockSections);
  });

  it('should create a new section on POST', async () => {
    const mockSection = { id: 3, name: 'Section 3' };
    Section.create.mockResolvedValue(mockSection);

    req.method = 'POST';
    req.body = mockSection;

    await handler(req, res);

    expect(Section.create).toHaveBeenCalledWith(mockSection);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockSection);
  });

  it('should handle errors', async () => {
    const mockError = new Error('Test error');
    Section.find.mockRejectedValue(mockError);

    req.method = 'GET';

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(mockError);
  });
});
