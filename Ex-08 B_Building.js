const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: 'Login successful' });
});

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Backend Server running on port ${port}`);
});
