FROM node:14-alpine AS development

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
