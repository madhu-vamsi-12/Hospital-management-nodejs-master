FROM ubuntu

USER root

RUN apt update -y

RUN apt install nodejs -y

RUN apt install npm -y

COPY package.json .

RUN npm install

COPY . .

RUN chmod -R 777 node_modules

ENTRYPOINT ["npm", "run", "start"]
