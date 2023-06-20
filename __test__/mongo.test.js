const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a document into collection', async () => {
    const products = db.collection('products');

    const mockProduct = {_id: 'some-product-id', name: 'Shirts'};
    await products.insertOne(mockProduct);

    const insertedProduct = await products.findOne({_id: 'some-product-id'});
    expect(insertedProduct).toEqual(mockProduct);
  });
});

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a document into collection', async () => {
    const posts = db.collection('posts');

    const mockPost = {_id: 'some-post-id', name: 'Stocks'};
    await posts.insertOne(mockPost);

    const insertedPost = await posts.findOne({_id: 'some-post-id'});
    expect(insertedPost).toEqual(mockPost);
  });
});

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});