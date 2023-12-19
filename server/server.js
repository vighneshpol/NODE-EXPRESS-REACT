const express = require('express');
const app = express();
const port = 5000; 
const { Pool } = require('pg');


// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432, // Default PostgreSQL port
});

app.use(express.json());



app.get('/',(req,res) => {
  res.json({
    info: 'VIghnesh Pol Node.js express and PostgreSQL CRUDS '
  })
})

// READ - Retrieve all users
app.get('/users', async (req, res) => {
  const userId = req.params.id;
  const { name, phoneNumber, email, hobbies } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users;');
    const users = result.rows;
    res.json(users);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE - Add a new user
app.post('/users', async (req, res) => {
  const { name, phoneNumber, email, hobbies } = req.body;

  if (!name || !phoneNumber || !email || !hobbies) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO users (name, phoneNumber, email, hobbies) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, phoneNumber, email, hobbies]
    );
    const newUser = result.rows[0];
    res.status(201).json(newUser);
    client.release();
  } catch (err) {
    console.error('Database error:', err.message); // Log the specific database error message
    res.status(500).json({ error: 'Server error', message: err.message }); // Send detailed error message back to the client
  }
});




// UPDATE - Update user details by ID
app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, phoneNumber, email, hobbies } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE users SET name=$1, phoneNumber=$2, email=$3, hobbies=$4 WHERE id=$5 RETURNING *',
      [name, phoneNumber, email, hobbies, userId]
    );
    const updatedUser = result.rows[0];
    res.json(updatedUser);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE - Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM users WHERE id=$1', [userId]);
    res.json({ message: 'User deleted successfully' });
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// SEND - Additional endpoint for send button 
app.post('/send', (res) => {
  // Logic to send data or perform an action
  res.json({ message: 'Data sent successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
