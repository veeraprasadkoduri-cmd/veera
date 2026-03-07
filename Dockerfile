# -------- Stage 1 : Build Stage --------
FROM node:18 AS builder

WORKDIR /app

# package files copy
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# build project
RUN npm run build


# -------- Stage 2 : Production Stage --------
FROM nginx:alpine

# remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# copy build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
