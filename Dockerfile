FROM nginx:1.19-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY --from=build-stage /app/build/ /usr/share/nginx/html