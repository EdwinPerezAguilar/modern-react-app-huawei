FROM node:current-alpine
WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY ./ /app/
#RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.19-alpine

ADD index.html /usr/share/nginx/html