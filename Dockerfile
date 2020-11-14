FROM node:15.2-alpine

WORKDIR /workdir

COPY package*.json ./
COPY index.js ./

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
