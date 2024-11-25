FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

COPY ./env/production.env ./env/production.env

RUN npm install --only=production

EXPOSE 3000

ENV $(cat ./env/production.env | xargs)

CMD ["node", "dist/index.js"]