FROM node:lts-alpine

MAINTAINER mazixiang

RUN npm config set registry https://registry.npm.taobao.org

RUN yarn config set registry https://registry.npm.taobao.org

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["http-server", "dist"]