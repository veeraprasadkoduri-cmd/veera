# Use Node 18 as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose port (frontend runs on 3000 by default)
EXPOSE 3000

# Start both frontend and backend
CMD ["npm", "start"]
