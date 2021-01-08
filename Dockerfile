## This container will build the website and store it in the /app/build folder.
# We use a scratch image to have a minimal container acting as an archive.

FROM node:latest AS builder

WORKDIR /app
COPY ./reagurk .

RUN npm install && npm run build

FROM scratch

COPY --from=builder /app/build /app/build
