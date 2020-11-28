FROM node:15.3.0-alpine
FROM postgres:13.1

WORKDIR /var/www/question-app

ENV PORT=3000
ENV SECRET=inirahasia

COPY package.json package-lock.json* ./                   

RUN npm install -g nodemon

RUN npm install -g sequelize-cli

RUN npm install && npm cache clean --force

COPY . .

RUN npx sequelize db:create

RUN npx sequelize db:migrate

CMD ["nodemon", "app.js"]
