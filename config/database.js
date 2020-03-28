const myslq = require('mysql');
const util = require('util');

const pool = myslq.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokemon'
});

pool.query = util.promisify(pool.query);
module.exports = pool;