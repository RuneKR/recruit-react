FROM node:13.12.0-alpine3.11

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package.json /srv/app/client
COPY yarn.lock /srv/app/client

RUN yarn

COPY . /srv/app/client

CMD ["yarn", "start"]