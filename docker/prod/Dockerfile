FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --prod

COPY module-alias.js ./

COPY dist ./dist

EXPOSE 4000

CMD [ "yarn", "start" ]