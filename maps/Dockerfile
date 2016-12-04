FROM alpine:latest

RUN apk update && apk add \
	nodejs

RUN npm install -g \
	pm2 \
	yarn

RUN mkdir /maps_backend-packages

COPY ./package.json /maps_backend-packages/package.json
RUN cd /maps_backend-packages/ && yarn install

COPY . /maps_backend
RUN rm -rf /maps_backend/node_modules
RUN mv /maps_backend-packages/node_modules /maps_backend/

WORKDIR /maps_backend

# RUN npm run build

EXPOSE 3000

CMD ["pm2", "start", "--no-daemon", "app.js"]
