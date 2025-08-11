# Proyek Final: Deployment Aplikasi Full-Stack di Cloud

## Background

Proyek ini adalah implementasi aplikasi REST API menggunakan Express.js dan PostgreSQL yang di-deploy ke Google Cloud Run. Aplikasi ini dilengkapi dengan CI/CD, monitoring, dan autoscaling untuk memenuhi kriteria tugas final.

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

## Fitur Utama
- Backend: REST API dengan Express.js
- Database: PostgreSQL dengan Docker
- CI/CD: Otomatisasi build, test, dan deploy menggunakan GitHub Actions
- Deployment: Google Cloud Run dengan konfigurasi autoscaling
- Monitoring: Google Cloud Monitoring dan Grafana
- Keamanan: Penggunaan environment variables untuk rahasia
- Dokumentasi API: Swagger UI lengkap

## Panduan Penggunaan

Prasyarat
```s
...
+--  Docker dan Docker Compose

+-- Akun Google Cloud

+-- Akun GitHub
...
```

Menjalankan Secara Lokal

Clone repository:
```s
git clone https://github.com/arelsaputra/express-rest-project
```
Ubah nama file .env.example menjadi .env dan sesuaikan konfigurasi.
Jalankan dengan Docker Compose:
```s
docker-compose up -d
```
Aplikasi akan berjalan di localhost:8080 dan PostgreSQL di localhost:5432.

Deployment ke Google Cloud Run
```s
...
+--  Setup GitHub Secrets untuk GCP credentials.

+-- Pipeline CI/CD akan otomatis menjalankan build dan deploy saat ada perubahan di branch main.

+-- Aplikasi akan tersedia di: https://express-rest-434589199417.asia-southeast2.run.app
...
```

## Dokumentasi Teknis
- CI/CD: GitHub Actions Workflow
- API Documentation: Swagger UI

## Link Penting

```s
...
Repository: https://github.com/arelsaputra/express-rest-project
Aplikasi Live: https://express-rest-434589199417.asia-southeast2.run.app
Pipeline: GitHub Actions
...
```
## Quick set up

You can quickly start with this template with npm or npx by entering

```sh
# With npm
npm install -g create-chill-express-api

# With npx
npx create-chill-express-api your-app-name

```

## Set up

To get started, please first change the name of `.env.example` to `.env` to set up all basic environment variables while you can also customize and add into there, but if you just wanna have a quick start, you can simply change the name to set it up.

There are 2 ways of starting the server to test the proper setup

#### Docker-compose

The recommend way of using it, you do not have to set up database locally and from scratch. After clone this project, in the root directory, with `docker` and `docker-compose` installed, you can simply do

```s
docker-compose up -d
```

Then your api and a database will be running on your [localhost:8080](localhost:8080) and [localhost:5432](localhost:5432) respectively.

#### Local

For using your own database on your local, you can set up your own database by the init files in `/db`. Then you can change the database configuration in `.env` to your local database url and db name, user name and password, then you can start locally by

```s
npm install

npm start
```

The you should have your api server running on your [localhost:8080](localhost:8080)

As long as you can see the server up and running, you are good to go.

## Usage

This will explain how to use this starter to get started with your own API usage

### Develop

This template is following the classic, bulletproof node.js 3-layer architecture, based on the **principle of separation of concerns**, so when you want to create a new service, just create these three layers for your service will be enough:

```s
...
+-- models                  // Sequelize ORM model layer
+-- services                // Business logic layer
+-- routes                  // Routing and controlling layer
...
```

This starter have an example service for your reference called User, which is an working example (when your server is up and running, this service is available), you can just follow it up, and basically it is like the following steps:

#### Model layer

First create your service data model and tables with the table properties and the fields properties in the `/models`. Right now I am using [sequelize ORM](https://sequelize.org/master/) for defining the model. You can refer to `models/UserModel.js` as an example

#### Routing layer

After you have your service model, you can then create the routes that relates to this service in `\routes` with express router, One remark here is that, for the sake of separating business logic from router, router here will not handle any service logic but just pass the data to services layers. You can refer to `routes/UserRoutes.js`

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

## TODO

- [x] Nodemoni watch code change and automatic update with container
- [x] Unit test
- [ ] github docker registry workflow
- [x] Swagger UI support
- [ ] Mongodb option
- [ ] add logging (Morgan)
- [ ] command line prompt for setting up instruction (setup.sh)
- [ ] JWT Authentication
- [ ] Pub/Sub layer and dependencies injection
