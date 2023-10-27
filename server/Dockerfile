FROM node

WORKDIR /server
COPY package.json ./
RUN npm install
RUN npm install nodemon
COPY . .

EXPOSE 5000
