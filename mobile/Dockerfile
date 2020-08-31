from node:lts-alpine

WORKDIR /usr/src/mobile

COPY package.*json .

RUN npm install --silent

COPY . .

CMD [ "npm", "start" ]
