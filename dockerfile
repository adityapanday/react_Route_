FROM node:20.3.1

# Set working directory
WORKDIR /myapp

# Install useradd tool (needed for non-root user creation)
RUN apt-get update && apt-get install -y sudo

# Create a non-root user (appuser)
RUN useradd -ms /bin/bash appuser

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies using npm install
RUN npm install --unsafe-perm=true

# Copy the rest of the application code
COPY . .

# Ensure the app files have the correct permissions
RUN chown -R appuser:appuser /myapp

# Build the Vite app for production
RUN npm run build

# Expose the application port
EXPOSE 4173

# Switch to the appuser for security
USER appuser

# Start the app using the preview script after building
CMD ["npm", "run", "preview", "--", "--host"]
