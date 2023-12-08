
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . .

RUN ng build
CMD ["npm", "start"]
