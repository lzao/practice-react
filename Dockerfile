FROM node:16-alpine

LABEL maintainer="lzao@naver.com"

# TimeZone setting
RUN apk --no-cache add tzdata && \
        cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
        echo "Asia/Seoul" > /etc/timezone

# etc package install
RUN apk --no-cache add lsof

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000