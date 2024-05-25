// app.js

const express = require('express');
const bodyParser = require('body-parser');
const transferRoutes = require('./routes/transferRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/', transferRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
