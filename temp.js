const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'cdac',
	database: 'test',
	port: 3306
});



const express = require('express');
const app = express();



const cors = require('cors');
app.use(cors());



const bodyParser = require('body-parser');
const { response } = require('express');
const { error } = require('console');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies






app.get('/showbook', (req, res) => {

	connection.query('select * from book', [],
		(error, rows) => {
			res.send(rows);
		}
	);


});


app.get('/add', (req, res) => {

	let input = { bookid: req.query.x, bookname: req.query.y, bookname : req.query.z };
	let output = true;

	connection.query('insert into book(bookid,bookname,price) values(?,?,?)', [input.bookid, input.bookname, input.price],
		(error, resolve) => {
			if (error) {

			}
			else if (resolve.affectedRows > 0) {
				output = true;
			}
			res.send(output);
		});


});




app.listen(8081, function () {
	console.log("server listening at port 8081...");
});