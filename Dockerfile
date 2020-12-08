MAINTAINER mazixiang

FROM node

RUN yarn install

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]