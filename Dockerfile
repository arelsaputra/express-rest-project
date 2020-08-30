FROM node:alpine

# working directory 
WORKDIR /usr/src/app

# app dependencies
COPY package*.json ./
RUN npm install

# build code for production
# RUN npm ci --only=production

# Bundle app source 
COPY . .

EXPOSE 8080
CMD ["npm", "start"]

