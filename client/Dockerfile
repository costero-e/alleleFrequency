# client/Dockerfile

FROM node:19-alpine

RUN [ "mkdir", "-p", "/usr/src/app" ]

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

COPY yarn.lock /usr/src/app/yarn.lock

RUN [ "yarn", "install", "--production" ]

COPY . /usr/src/app