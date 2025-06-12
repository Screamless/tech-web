const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.post('/cart', async (req, res) => {
  const { product_id, quantity } = req.body;
  await pool.query(
    'INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2)',
    [product_id, quantity]
  );
  res.json({ message: 'Added to cart' });
});

app.get('/cart', async (req, res) => {
  const result = await pool.query(`
    SELECT ci.id, ci.quantity, p.*
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.id
  `);
  res.json(result.rows);
});

app.put('/cart/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  await pool.query(
    'UPDATE cart_items SET quantity = $1 WHERE id = $2',
    [quantity, id]
  );
  res.json({ message: 'Quantity updated' });
});

app.delete('/cart/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM cart_items WHERE id = $1', [id]);
  res.json({ message: 'Item removed' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
