FROM node:12.22.9-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]