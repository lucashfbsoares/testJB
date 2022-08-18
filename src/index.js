const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the API test' }));

app.use(router);

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
