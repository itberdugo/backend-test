# Node.js base image
FROM node:20-alpine

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Expose the port
EXPOSE 3000

# Command to start the app
CMD ["npm", "run", "dev"]