FROM node:14-alpine

WORKDIR /server

COPY package*.json /server/

RUN yarn install

COPY . /server/

RUN yarn run build

EXPOSE 2000

CMD ["node","dist/main"]