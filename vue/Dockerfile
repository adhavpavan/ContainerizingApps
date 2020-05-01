# FROM node:lts-alpine as builder
# WORKDIR /usr/src/app
# COPY . ./
# RUN npm install
# RUN npm run build
# FROM nginx:alpine
# COPY --from=builder /usr/src/app/dist /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 3000
# ENTRYPOINT ["nginx","-g","daemon off;"]



# Stage 1 - Build React App inside temporary Node container
FROM node:carbon-alpine as builder

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run-script build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.15.2-alpine

COPY --from=builder /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
