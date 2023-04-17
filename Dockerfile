FROM node:14.18.3 as base

WORKDIR /app

COPY package.json yarn.lock  /app/
COPY playground/package.json /app/playground/package.json
COPY playground/yarn.lock /app/playground/yarn.lock

RUN yarn install

COPY . .

RUN yarn lint

RUN yarn test:ci

FROM node:14.18.3 as build

ARG PROFILE=development
ARG BUILD_NUMBER=1
ARG EXPO_TOKEN
ENV EXPO_TOKEN=$EXPO_TOKEN

WORKDIR /app

COPY --from=base /app .
RUN sed -i -e "s/__BUILD_NUMBER__/$BUILD_NUMBER/" eas.json

RUN cat eas.json

RUN npx eas-cli build --platform=android --profile=$PROFILE --non-interactive --no-wait
RUN npx eas-cli build --platform=android --profile=$PROFILE --non-interactive --no-wait
