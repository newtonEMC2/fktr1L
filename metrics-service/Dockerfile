FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY db.json ./

CMD npm start
