# Express REST API starter template with postgreSQL and docker

## Background 

This starter template is for quickly getting started with express + PostgreSQL + docker for a rest backend, which is the tech stack I personally find good enough for most of use case I encountered so far.

The practices and structures here is what I used and improved through the projects with express, Postgres and docker, some of them have been proved with the production environment, so it would be a good template for anyone to get started. But I am still constantly learning node.js so you are very welcome and appreciated to provide any suggestion on them.


## Template structure 

```s
.
+-- index.js                // Application entry point
+-- models                  // Sequelize ORM model layer
+-- services                // Business logic layer
+-- routes                  // Routing layer
+-- db                      // database image 
|   +-- Dockerfile          // database Dockerfile
|   +-- init
|       +-- 00-database.sql // Database schema initiation file
|       +-- 01-data/sql     // Database data initiation file
+-- public                  // 404.html and 500.html
+-- database.js             // Sequelize database connection configuration
+-- Dockerfile              // express Dockerfile
+-- ...
```

## Usage

To get started, please first change the name of `.env.example` to `.env` while you can customize any environment variables there, but if you just wanna have a quick start, you can simply change the name. 

There are totally 3 ways of using this starer 
   
#### Docker-compose

The recommend way of using it, after clone this project, in the root directory, with docker and docker-compose installed, you can simply do 

```s
docker-compose up -d
```

Then your api and a database will be running on your [localhost:8080](localhost:8080) and [localhost:5432](localhost:5432) respectively.

#### Use database from container and the api from your local node.js

With this approach, you can skip the step of installing database on your local, but need a bit extra configuration

First you need to start the database container by 
```s
docker-compose up -d db
```
Then find out the container id of your database container with
```s
docker ps
```
Then we want to get the IP address of this database image. In the output of 
```s
docker inspect <container-id>
```
find out the field called with `IPAddress`.

Lastly, in the environment variable file `.env`, we change the `DATABASE_URL` to 
```s
DATABASE_URL=postgres://myusr:myusr@<IPAddress>/mydb
```

Then you can install all dependencies and start your local server by running 
```s
npm install 

npm start
```

Then you will have a local server connected to the database

#### Local 

If you wanna use your own database with this api server, you can simply change the database configuration in `.env` to your local database url and db name, user name and password, then you can start locally by 
```s
npm install

npm start
```
## Remarks

> Reason of using sequelize ORM over Database driver like pg or Query Builder like knex is for supporting as many SQL db as possible, but I found [this article](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5/) interesting for talking about different level of abstraction, you can take a look if you are interested

> This is also why this can only support SQL db now and cannot support NoSQL yet, planning to add option for some NoSQL db in the future


## TODO 

- [ ] Unit test
- [ ] JWT Authentication
- [ ] Pub/Sub layer and dependencies injection
- [ ] 404.html and 500.html
- [ ] [now.sh](https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel) deploy
- [ ] Swagger UI support
- [ ] Mongodb option 