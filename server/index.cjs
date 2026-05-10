const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use((req, res) => {
  if (!req.path.startsWith('/api')) res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  else res.status(404).json({ error: 'Not found' });
});
app.listen(5923, '127.0.0.1', () => console.log('RateCraft on :5923'));
