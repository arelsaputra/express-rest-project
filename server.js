const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const compression = require('compression');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const app = express();

// 🔹 Tambahkan ini di paling awal setelah `const app = express();`
app.get('/', (req, res) => {
  console.log('✅ GET / triggered');
  res.send('✅ Express API is up and running!');
});

// Database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Unable to connect to databases:', err);
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(compression());

// Routes
const userRoutes = require('./routes/UserRoutes');
app.use(userRoutes);

// Swagger UI
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express-rest API Swagger Documentation',
      version: '0.1.0',
      description: 'The swagger doc for example api endpoints in this express-rest template',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Charlie',
        url: 'https://github.com/yfchiuaa',
      },
    },
  },
  apis: ['./models/UserModel.js', './routes/UserRoutes.js'],
};
const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Error handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
});
app.use((req, res, next) => {
  res.status(404).send('The page cannot be found!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('###############################');
  console.log(`The server starts at ${PORT}`);
  console.log('###############################');
});
