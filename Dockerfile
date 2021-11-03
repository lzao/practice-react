FROM node:16

LABEL maintainer="lzao@naver.com"

RUN apt-get clean && apt-get update && apt-get install -y locales lsof

RUN locale-gen ko_KR.UTF-8
ENV LANG ko_KR.UTF-8
ENV LANGUAGE ko_KR.UTF-8
ENV LC_ALL ko_KR.UTF-8

# TimeZone 설정
ENV TZ Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000