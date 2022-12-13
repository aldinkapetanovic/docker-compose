FROM node

# Create the app directory and copy the source code into it
RUN mkdir /app
COPY . /app

# Set the working directory to the app directory
WORKDIR /app

# Install the app dependencies
RUN npm install

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
