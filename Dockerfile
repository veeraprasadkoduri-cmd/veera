# --------- Stage 1: Builder ---------
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy entire project
COPY . .

# Optional: Build frontend if needed
# RUN npm run build   # Uncomment if frontend has a build step

# --------- Stage 2: Final Image ---------
FROM node:18

# Set working directory
WORKDIR /app

# Copy files from builder stage
COPY --from=builder /app ./

# Install nodemon globally for backend
RUN npm install -g nodemon

# Expose frontend and backend ports
EXPOSE 3000
EXPOSE 3001

# Start both frontend and backend
CMD ["npm", "start"]
