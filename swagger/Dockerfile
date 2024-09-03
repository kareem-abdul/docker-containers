FROM node:20-alpine
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable && corepack install && pnpm install
COPY *.js .
CMD node app.js
