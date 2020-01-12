FROM node:13.6.0 AS development

RUN mkdir /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json

RUN yarn install

CMD ["yarn", "run", "dev"]