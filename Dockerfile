FROM node:latest AS builder

WORKDIR /app

COPY ./reagurk/package.json ./reagurk/yarn.lock ./
RUN yarn set version berry
RUN echo "nodeLinker: node-modules" >> .yarnrc.yml
RUN yarn install

COPY ./reagurk .
RUN yarn build

FROM scratch

COPY --from=builder /app/build /