# Stage 1: Build Angular application with server-side rendering
FROM node:22.12-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g @ionic/cli
RUN npm install

# Copy app source code
COPY . .

# Build Ionic app
RUN  ionic build --prod

# Stage 2: Use only the compiled app for production
FROM nginx:1 as production

# Create app directory
WORKDIR /usr/src/app

# Copy only the needed files from the build
COPY --from=build /usr/src/app/www/ /usr/share/nginx/html/
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
