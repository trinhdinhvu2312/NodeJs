const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = 8081;

// Middleware
app.use(bodyParser.json());

// Sử dụng cors middleware
app.use(cors());

app.use(express.json());

// Sử dụng tuyến đường cho thực thể "students"
app.use('/api', studentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
