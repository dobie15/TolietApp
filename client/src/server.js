const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_TOLIETS_QUERY = 'SELECT * from bathrooms';

//Creating the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SwampSquad'
  });

//Lets you know if it was connected successfully or if there was an error
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
  }); 

app.use(cors());

app.get('/', (req, res) => {
res.send('Go to /toliets to see toliets in your area.');
});

app.get('toliet stuff', (req, res) => {

});

app.listen(3000, () => {
console.log('Toilet server listening on port 3000');
});

