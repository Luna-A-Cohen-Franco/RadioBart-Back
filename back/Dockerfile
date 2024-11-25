FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN mkdir -p /app/env && echo "$PRODUCTION" > /app/env/production.env

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

COPY --from=build /app/env/production.env ./env/production.env

RUN npm install --only=production

EXPOSE 8081

ENV $(cat ./app/env/production.env | xargs)

CMD ["node", "-r", "module-alias/register", "./dist", "--env=production"]