FROM node:19.8-alpine

WORKDIR /

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
