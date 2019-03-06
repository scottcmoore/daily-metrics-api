## Runs with:


FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# TODO: Does this need chown as well?
COPY package*.json ./

RUN npm install && npm install -g nodemon

USER node

# Bundle app source
COPY --chown=node:node . .

EXPOSE 8080

CMD [ "nodemon", "--legacy-watch", "server.js" ]
