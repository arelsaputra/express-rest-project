const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const compression = require('compression');
require('dotenv').config();

const app = express();

// Database
sequelize.authenticate().then(() => {
    console.log('Connected to the database');  
}).catch(err => {
    console.log('Unable to connect to databases:', err);
})

// Middleware
app.use(express.urlencoded({ exrended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(compression());  // reduce file size before sending to web browser to ereduce latency

// Routes
const userRoutes = require('./routes/UserRoutes');
app.use(userRoutes);

// Handle Errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, './public/500.html'));
})
app.use((req, res, next) => {
    res.status(404).send('The page cannot be found!');
})

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('###############################');
    console.log(`The server starts at ${PORT}`);
    console.log('###############################');
});
