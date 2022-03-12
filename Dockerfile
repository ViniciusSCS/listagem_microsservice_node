FROM node:16.14.0-alpine 

ARG 1000

ARG 1000

RUN apk --no-cache add shadow && \
    usermod -u ${DK_UID:-1000} node && \
    groupmod -g ${DK_GID:-1000} node

USER node

RUN mkdir /home/node/project

WORKDIR /home/node/project

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

EXPOSE 8020

CMD ["npm", "run", "start"]