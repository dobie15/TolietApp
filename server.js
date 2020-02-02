const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/backend', (req, res) => {
  res.send({ express: 'Working ----' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();

// const SELECT_ALL_TOLIETS_QUERY = 'SELECT * from bathrooms';

// //Creating the connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'SwampSquad'
//   });

// //Lets you know if it was connected successfully or if there was an error
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connecd to the database!');
//   }); 

// app.use(cors());

// app.get('/', (req, res) => {
// res.send('Go to /toliets to see toliets in your area.');
// });

// app.get('/toliet stuff', (req, res) => {
  // something connectjs
// });

// app.listen(3000, () => {
// console.log('Toilet server listening on port 3000');
// });

