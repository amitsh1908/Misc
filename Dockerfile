# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --include=dev


# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Run with npm start
CMD ["npm", "run","dev"]
