const mysql = require('mysql');

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

//Retrieves data from the queries
connection.query('SELECT * FROM bathrooms', (err, rows) =>{
if(err) throw err;

console.log('Data recieved from Db: ');

//Prints out query information
for(var i = 0; i < rows.length; i++)
{
  var dis = rows[i];
  console.log(dis);
}

});

//Closing the connection to the database 
connection.end((err) => {
    if(err){
        return console.log('Error:' + err.message);
    }
    console.log("Sucessfully closed the database connection.");
}); 