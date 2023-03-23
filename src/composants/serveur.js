const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'connexion'
});
connection.connect((err) => {
if (err) {
console.error('Error connecting to database: ' +
err.stack);
return;
}
console.log('Connected to database as id ' +
connection.threadId);
});
app.use(cors());
app.use(bodyParser.json());

// GET request to retrieve all data from the 'client' table
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM client',
    (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

// POST request to add new data to the 'user' table
app.post('/data', (req, res) => {
    const { nom, prenom, email, mot_de_passe } = req.body;
    const newClient = { nom, prenom, email, mot_de_passe };
    connection.query('INSERT INTO user SET ?', newClient,
      (error, results) => {
        if (error) throw error;
        console.log(results);
        res.send('Data added successfully');
      });
  });


// POST request to check if user exists in the 'user' table
app.post('/login', (req, res) => {
    const { email, mot_de_passe } = req.body;
    connection.query('SELECT * FROM user WHERE email = ? AND mot_de_passe = ?', [email, mot_de_passe], (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.redirect('/Profil');
        } else {
            res.send('utilisateur introuvable');
        }
    });




});


app.listen(port, () => {
console.log('Server running on port' ,{port});
});

