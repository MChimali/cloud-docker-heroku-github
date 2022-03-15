FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM base AS build
COPY ./ ./
RUN npm install
RUN npm run build

FROM base AS release
COPY ./server ./
COPY --from=build /usr/app/dist ./public
RUN npm install

ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["node", "index.js"]