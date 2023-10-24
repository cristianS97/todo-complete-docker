# STAGE 1
FROM node:21-alpine AS prod

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# STAGE 2
FROM nginx:alpine

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=prod /app/build /var/www/app/

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
