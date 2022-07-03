FROM node

WORKDIR /app

COPY package*.json .npmrc /app/

RUN npm install -g npm@latest

RUN npm install --legacy-peer-deps 

COPY . . 

EXPOSE 3000

CMD [ "npm" , "run" , "dev" ]