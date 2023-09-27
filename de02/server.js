const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const dotenv = require('dotenv');
// Đọc giá trị cổng từ tệp .env
dotenv.config();
const app = express();
const port = 8081;

const employeesRouter = require('./routes/employees');//router
app.use(bodyParser.json());

// Middleware
app.use(bodyParser.json());

// Sử dụng cors middleware
app.use(cors());

app.use(express.json());

app.use('/api/employees', employeesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
