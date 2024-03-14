# Stage 1: Build the Angular application
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'build' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build /app/dist/rtgs /usr/share/nginx/html

## Copy custom nginx configuration (optional)
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
