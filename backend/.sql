
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(100),
  name VARCHAR(255),
  price NUMERIC(10,2),
  image TEXT,
  color VARCHAR(100)
);


CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL
);
