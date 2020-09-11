FROM node:13.12.0-alpine3.11

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package.json /srv/app/server
COPY package-lock.json /srv/app/server

RUN npm install

COPY . /srv/app/server

EXPOSE 8080
CMD ["npm", "start"]