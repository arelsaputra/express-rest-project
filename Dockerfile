FROM node:alpine

# working directory
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

# app dependencies
COPY package*.json ./
RUN npm install

# build code for production
# RUN npm ci --only=production

# Bundle app source 
COPY . .

EXPOSE 8080
CMD ["npm", "run", "start.dev"]

