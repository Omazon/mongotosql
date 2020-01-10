const express = require('express')
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');
const Agent = require('../models/agents');

mongoose.connect('mongodb+srv://omarboza:MRQpywNqmLWXlgrn@cluster0-zyflw.mongodb.net/mongotosql?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => console.log('conectado')).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json('hello world')
});
app.get('/save', (req, res) => {
    let agent = new Agent({
        agent_code: 'asdf',
        agent_name: 'adfasdfsd',
        working_area: 'adfasdfsd',
        commission: 56565,
        phone_no: 'asfasdfsdfsd',
        country: 'asdfsadfsfsd'
    });
    agent.save((err, usuarioDB)=>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
        })
    })
});

app.get('/mysql',(req, res) => {
    var connection = mysql.createConnection({
    host     : 'sql10.freesqldatabase.com',
    user     : 'sql10318391',
    password : 'swlNQKIwFm',
    database: 'sql10318391'
    });

    connection.connect();

    connection.query('select * from agents', function(err, rows, fields) {
        if (err) throw err;
        let agent = new Agent();
        agent.collection.insertMany(rows,(err, usuarioDB)=>{
            if(err){
                res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
            })
        })
    });

    connection.end();
})

module.exports = app;