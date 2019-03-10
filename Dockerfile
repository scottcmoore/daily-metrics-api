FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy the package first so npm install doesn't re-run on each code change
COPY package*.json ./
RUN npm install && npm install -g nodemon

USER node

# Bundle app source
COPY --chown=node:node . /usr/src/app