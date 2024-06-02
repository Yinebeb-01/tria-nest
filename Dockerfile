FROM node:18

WORKDIR /app

COPY package*.json ./

COPY ./ ./

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start:dev"]
