# PERN Shop project

## Usage with docker:
1. Clone repository
2. Create local docker image with <code>docker-compose build</code>
3. Start docker container with <code>docker-compose up</code>

Front will be available on <code>http://localhost/ </code>

API will be available on <code>http://localhost:5000/ </code>

PGAdmin will be available on <code>http://localhost:5050/browser/ </code>

## Usage locally:
1. Clone repository
2. Install PSQL
3. Create PSQL database in pgAdmin

#### Server
4. Change directory to server <code>cd ./server/</code>
5. Create .env file providing variables: 
* PORT - server port, 
* DB_NAME - created database name 
* DB_USER - created database user
* DB_PASSWORD - created database user password 
* DB_HOST - created database host,
* DB_PORT - created database port (provided while creating)
* SECRET_KEY - secret key for jwt
6. Install dependencies <code>npm i</code>
7. Start server <code>npm run dev</code>

#### Client
8. Change directory to client <code>cd ./client/</code>
9. Install dependencies <code>npm i</code>
10. Create .env file providing variables: 
* REACT_APP_API_URL - server host with port
11. Start client <code>npm start</code>