# 1. Build da aplicação
FROM node:22-bullseye AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# 2. Container final com NGINX
FROM nginx:alpine

# Limpa a pasta padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos gerados na build do React
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
