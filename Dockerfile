# # Base image with Playwright dependencies
# FROM mcr.microsoft.com/playwright:v1.49.1-noble

# COPY package.json package-lock.json ./
# COPY . /e2e
# # Set the working directory
# WORKDIR /e2e

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./
# COPY . /

# # Install Node.js dependencies
# RUN npm install

# # Copy the Playwright configuration and test files
# COPY playwright.config.js ./playwright.config.js
# COPY tests ./tests

# # Run Playwright install to ensure browsers are installed
# RUN npx playwright install

# # Default command to run Playwright tests
# CMD ["npx", "playwright", "test"]



# Base image with Playwright dependencies
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Set the working directory
WORKDIR /e2e

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure browsers are installed
RUN npx playwright install

# Default command to run Playwright tests
CMD ["npx", "playwright", "test"]
