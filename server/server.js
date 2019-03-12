const path = require('path');
const express = require('express');

const app = express();
const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.sendFile('./index.html');
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

