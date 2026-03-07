# ---------- Stage 1 : Build ----------
FROM node:18 AS builder

WORKDIR /app

# copy root package.json
COPY package*.json ./
RUN npm install

# copy project
COPY . .

# install frontend dependencies
WORKDIR /app/frontend/bikes-rental-system
RUN npm install

# install backend dependencies
WORKDIR /app/backend
RUN npm install


# ---------- Stage 2 : Runtime ----------
FROM node:18-slim

WORKDIR /app

# copy built project from builder
COPY --from=builder /app /app

EXPOSE 3000
EXPOSE 5000

CMD ["npm","start"]
