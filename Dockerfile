FROM node:15.3.0-alpine

WORKDIR /var/www/question-app

ENV PORT=3000
ENV SECRET=inirahasia

COPY package*.json ./                   

RUN npm install -g nodemon

RUN npm install -g sequelize-cli

RUN npm install && npm cache clean --force

COPY . .

CMD ["nodemon", "app.js"]
