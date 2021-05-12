FROM node:lts-alpine as build

RUN mkdir -p /build

WORKDIR /build

COPY package.json /build
COPY yarn.lock /build
COPY src/ /build/src
COPY tslint.json/ /build/tslint.json
COPY angular.json/ /build/angular.json
COPY tsconfig.app.json/ /build/tsconfig.app.json
COPY tsconfig.json/ /build/tsconfig.json

RUN yarn install --frozen-lockfile 
RUN yarn build --prod

FROM nginx:1.19.10-alpine

COPY --from=build /build/dist/twikit-test /usr/share/nginx/html
