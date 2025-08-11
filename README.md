# Final Project: Deployment of a Full-Stack Application in the Cloud

## Background

This project is a REST API application implementation using Express.js and PostgreSQL deployed to Google Cloud Run. The application features CI/CD, monitoring, and autoscaling to meet the final assignment criteria.

## Struktur Proyek

```s
.
+-- index.js                // Application entry point
+-- models                  // Sequelize ORM model layer
+-- services                // Business logic layer
+-- routes                  // Routing and controlling layer
+-- db                      // database image
|   +-- Dockerfile          // database Dockerfile
|   +-- init
|       +-- 00-database.sql // Database schema initiation file
|       +-- 01-data/sql     // Database data initiation file
+-- test                    // unit test files
|   +-- get.js              // unit test for all GET request
|   +-- post.js             // unit test for all POST request
+-- database.js             // Sequelize database connection configuration
+-- Dockerfile              // express Dockerfile
+-- .env.example
+-- ...
```

## Implementation Results and Screenshots

1. Autoscaling Configuration in Google Cloud Run
   
[Autoscaling Configuration in Google Cloud Run](https://drive.google.com/drive/folders/1niffWIxLzm3YLdQbfN0buTD_HRGhYahS?usp=sharing)
```s
...
+-- Min instances: 1 (to reduce cold starts)
+-- Max instances: 5 (to handle traffic spikes)
+-- Memory: 512MB per instance
...
```

2. API Documentation with Swagger UI
   
[API Documentation with Swagger UI](https://drive.google.com/drive/folders/1ffcqusaRj0zMyL8BB4D3D_tS-djVNHgP?usp=sharing)
```s
...
+-- Available at: https://express-rest-434589199417.asia-southeast2.run.app/api-docs
...
```

3. Dashboard Monitoring
   
[Dashboard Monitoring](https://drive.google.com/drive/folders/1IqzOW9KTgi6T51hKj4a6DvLBKk2JsgSi?usp=sharing)
```s
...
+-- Google Cloud Monitoring is active
+-- Grafana integration for metrics visualization
...
```

4. Testing API with Postman
   
[Testing API with Postman](https://drive.google.com/drive/folders/1mzX8FxjGRxJw2QrlIefrN88EvPIjTk1r?usp=sharing)
```s
...
+-- API endpoint has been successfully tested with Postman
...
```

## Key Features
- Backend: REST API with Express.js
- Database: PostgreSQL with Docker
- CI/CD: Automate builds, tests, and deployments using GitHub Actions
- Deployment: Google Cloud Run with autoscaling configuration
- Monitoring: Google Cloud Monitoring and Grafana
- Security: Use environment variables for secrets
- API documentation: Comprehensive Swagger UI
  
## Usage Guide

Prerequisite
```s
...
Docker dan Docker Compose
Akun Google Cloud
Akun GitHub
...
```

Running Locally

Clone repository:
```s
git clone https://github.com/arelsaputra/express-rest-project
```
Rename the .env.example file to .env and adjust the configuration accordingly.
Run it with Docker Compose:
```s
docker-compose up -d
```
The application will run on localhost:8080 and PostgreSQL on localhost:5432.

Deployment to Google Cloud Run
```s
...
+-- Setup GitHub Secrets for GCP credentials.
+-- The CI/CD pipeline will automatically run builds and deploys when changes are made to the main branch.
+-- The app will be available at: https://express-rest-434589199417.asia-southeast2.run.app
...
```

## Technical Documentation
- CI/CD: GitHub Actions Workflow
- API Documentation: Swagger UI

#### Local

For using your own database on your local, you can set up your own database by the init files in `/db`. Then you can change the database configuration in `.env` to your local database url and db name, user name and password, then you can start locally by

```s
npm install
npm start
```
#### Model layer

First, create your service and table data models with table properties and field properties in `/models`. I'm currently using the Sequelize ORM to define the models. You can refer to `models/UserModel.js` for an example.

#### Routing layer

Once you have a service model, you can create routes associated with that service in `\routes` with express router. One thing to note here is that, to separate business logic from the router, the router here will not handle any service logic, but will simply pass data to the service layer. You can refer to `routes/UserRoutes.js`.

#### Service layer

Finally, you create your services in `/services`. In the example of `services/UserServices.js`, it is a very simple CRUD service for your reference, but you can create other services here as well.

### Test

For quickly getting started with unit testing, I have set up [chai](https://www.npmjs.com/package/chai), [mocha](https://www.npmjs.com/package/chai) and [supertest](https://www.npmjs.com/package/supertest) in this project and some very simple CRUD unit tests with GET and POST request in the `/test` against User services for your reference.

### Build

This starter is with docker and docker-compose build in nature, whcih makes it very easy to be deployed as container in any environment. I am also trying to add CI/CD in the near future for this starter with github registry.

## Remarks

Why use sequeluze ORM

> Reason of using sequelize ORM over Database driver like pg or Query Builder like knex is for supporting as many SQL db as possible, but I found [this article](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5/) interesting on talking about the different level of abstraction, you can take a look if you are interested

NoSQL db

> This is also why this can only support SQL db now and cannot support NoSQL yet, planning to add option for some NoSQL db in the future

## Important Links

```s
...
Repository: https://github.com/arelsaputra/express-rest-project
Aplikasi Live: https://express-rest-434589199417.asia-southeast2.run.app
Pipeline CI/CD: https://github.com/arelsaputra/express-rest-project/actions/runs/16806925513/workflow?
...
```
## TODO

- [ ] add logging (Morgan)
- [ ] MongoDB Database Options
- [ ] Implementing JWT Authentication
