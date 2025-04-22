FROM node:18.16.0 AS build
WORKDIR /app
ENV VITE_API_URL=http://aigineer.ru:8080/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]