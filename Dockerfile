# Use official Node image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Allow all hosts (important for Docker networking)
ENV HOST 0.0.0.0

# Start dev server
CMD ["npm", "run", "dev"]
