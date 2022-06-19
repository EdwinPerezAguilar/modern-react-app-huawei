# stage1 - build react app first 
FROM node:12.16.1-alpine3.9
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./npm.lock /app/
RUN npm
COPY . /app
#RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d



#ADD index.html /usr/share/nginx/html