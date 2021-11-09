// express server
const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// mysql dalis
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "cats",
    password: "cats",
    database: "cats"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// cors dalis

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

// testas

app.get('/labas/:id', (req, res) => {
    res.send(`labas ${req.params.id} tau`)
})

app.get('/test', (req, res) => {
    res.send(JSON.stringify({ test: 'OK' }))
})
// 1. Atsispausdiname visus duomenis is duomenu bazes
app.get('/cats', (req, res) => {
    const sql = `
    SELECT *
    FROM cats
    `;
    con.query(sql, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    })
  })