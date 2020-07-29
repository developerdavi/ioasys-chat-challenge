FROM node

RUN mkdir -p /home/chatty/app/backend/node_modules && chown -R node:node /home/chatty/app/backend

WORKDIR /home/chatty/app/backend

COPY package.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node_modules/.bin/nodemon", "src" ]
