1. Created "Dockerfile":
```Dockerfile
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
```
2. Created .dockerignore with all folders.
3. At this moment you can create an image with the project and use it to create a container. 
    "docker build -t react-practice:1 ."
    "docker run --name practice-container -p8083:8080 react-practice:1"

4. 
name: Continuous Deployment workflow
on:
  push:
    branches:
      - master
jobs:
  cd:
    runs-on: ubuntu-latest
