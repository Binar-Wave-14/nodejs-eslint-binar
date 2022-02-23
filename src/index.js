require('dotenv').config();
const express = require('express');

const app = express();
const { PORT } = process.env;

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Hello World',
  })
);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
