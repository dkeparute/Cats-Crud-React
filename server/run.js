//   moment importavimas
const moment = require('moment');
const m = moment();
console.log(m.format('YYYY-MM-DD'));

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

// 1. Atsispausdiname visus duomenis is duomenu bazes naudojant GET
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

// 10. Irasymas i duomenu baze
app.post('/cats', (req, res) => {
    const sql = `
    INSERT INTO cats
    (breed, size, behaviour, age)
    VALUES(?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.breed,
        req.body.size,
        req.body.behaviour,
        req.body.age
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);

    })
})

// 35. editina katina
app.put('/cats/:id', (req, res) => {
    const sql = `
    UPDATE cats
    SET breed = ?, size = ?, behaviour = ?, age= ?
    WHERE id = ?
    `;
    con.query(sql, [
        req.body.breed,
        req.body.size,
        req.body.behaviour,
        req.body.age,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);

    })
})

// 39 triname gyvuna 
app.delete('/cats/:id', (req, res) => {
    const sql = `
    DELETE from cats
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);

    })
})

// 41. Randa visus skirtingas kaciu rusis
app.get('/cats-breed', (req, res) => {
    const sql = `
    SELECT DISTINCT breed
    FROM cats
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//46. Is duomenu bazes rodo tam tikros rusies gyvunus
app.get('/cats-filter/:b', (req, res) => {
    const sql = `
    SELECT *
    FROM cats
    WHERE breed = ?
    `;
    con.query(sql, [req.params.b], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// 55. Paieska pagal kates buda
app.get('/cats-behaviour', (req, res) => {
    const sql = `
    SELECT *
    FROM cats
    WHERE behaviour LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})