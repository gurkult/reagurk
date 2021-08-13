FROM node:latest
RUN mkdir -p '/app'
WORKDIR '/app'

COPY package.json '/app'
RUN npm install
ADD src '/app/src'
ADD public '/app/public'
RUN npm build
CMD ["npm", "start"]
