FROM node:16-alpine

USER node

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD npm start