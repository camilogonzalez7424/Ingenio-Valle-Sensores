var mysql = require('mysql');

const con = mysql.createConnection(
    {
        host:'200.3.193.22',
        port: '3306',
        database: 'P09728_1_4',
        user: 'P09728_1_4',
        password: 'TGCQhldj'
    }
);

module.exports.con = con;