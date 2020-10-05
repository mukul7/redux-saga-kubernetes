FROM node:14.12.0 as builder
RUN mkdir /redux-saga-kuberenetes
WORKDIR /redux-saga-kubernetes
COPY package.json yarn.lock ./
RUN yarn
COPY ./src /redux-saga-kubernetes/src
COPY ./public /redux-saga-kubernetes/public
COPY ./tsconfig.json /redux-saga-kubernetes/tsconfig.json
RUN yarn build
FROM nginx:1.17
COPY gzip.conf /etc/nginx/conf.d/
COPY --from=builder /redux-saga-kubernetes/build /usr/share/nginx/html