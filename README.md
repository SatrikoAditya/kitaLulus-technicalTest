# kitaLulus-TechnicalTest

### Tech Stack : 
- Node.js, Express.js, PostgreSQL, Sequelize ORM, bcrypt, Jsonwebtoken, uuid, Docker

### How to Run the app:
- Make sure `docker` and `docker-compose` already installed
- clone this repository and move to this repository (folder) with terminal
- run on terminal `docker-compose up`
- run on terminal `docker exec question-app sequelize db:create`
- run on terminal `docker exec question-app sequelize db:migrate`
- this app run on port `3000`
- Please read the `api-doc.md` to know list of endpoints
