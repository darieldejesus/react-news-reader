FROM node:8

WORKDIR /home/react-news-reader

EXPOSE 3000

COPY . /home/react-news-reader

RUN npm install -g yarn --quiet

RUN yarn install

CMD ["yarn", "start"]
