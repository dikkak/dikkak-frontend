# FROM node:16.14.0
# RUN yarn global add serve
# RUN mkdir ./build
# COPY ./build ./build
# ENTRYPOINT ["serve", "-s", "build"]

FROM node:16.14.0
RUN mkdir /app
WORKDIR /app
COPY ./ ./
RUN yarn
ENTRYPOINT ["yarn", "start"]