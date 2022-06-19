FROM node:current-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "build"]

FROM nginx:1.19-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html