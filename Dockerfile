# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Docusaurus website
RUN npm run build

# Expose the port your Docusaurus website runs on (default is 3000)
EXPOSE 3000

# Define the command to start your Docusaurus website
CMD ["npm", "run", "start"]

