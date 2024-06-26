const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors=require('cors')
const app = express();

// Database connection
const conStr='mongodb+srv://admin:admin@cluster0.qcdda.mongodb.net/gym'
mongoose.connect(conStr);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());
// Optionally, configure CORS to allow requests from specific origins
app.use(cors({
    origin: 'http://localhost:5173'
}));
// Routes
//ROuting
const gymRoutes = require('./routes/gymRoutes');
app.use('/api/gyms', gymRoutes);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});