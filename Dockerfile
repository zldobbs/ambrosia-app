FROM node:lts

WORKDIR /usr/src/ambrosia-app

# Copy dependency specifiers first to leverage w/ Docker layer caching
COPY package.json yarn.lock ./

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
# Default to starting the web version, but allow platform overrides using ARG
ARG PLATFORM=web
ENV PLATFORM=${PLATFORM}

CMD yarn ${PLATFORM}
