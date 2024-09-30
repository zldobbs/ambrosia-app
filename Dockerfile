FROM node:lts

WORKDIR /usr/src/ambrosia-app

# Copy dependency specifiers first to leverage w/ Docker layer caching
COPY package.json .
COPY yarn.lock .

# Install deps
RUN yarn install

# Copy rest of app src
COPY . .

# Expo dev tools port
EXPOSE 19000
# React Native app connection
EXPOSE 19001
# WebSocket debugger connection
EXPOSE 19002
# Metro bundler port for web
EXPOSE 8081

# Start on web
# TODO: Support starting for ios/android using ARGs
CMD ["yarn", "web"]
