const mysql = require('mysql2/promise');

// Cấu hình kết nối đến cơ sở dữ liệu
const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',      
    password: '',     
    database: 'c2206l',
    connectionLimit: 10
  });

module.exports = pool;
