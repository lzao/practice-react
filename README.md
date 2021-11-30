# 대한민국 일일 코로나 현황
대한민국의 일별 코로나 현황을 보여줍니다.

## 사전작업
1. Docker machine 설치
  - mac https://hub.docker.com/editions/community/docker-ce-desktop-mac   
  - window https://www.docker.com/products/docker-desktop
2. Git Repository 내려받기
  - 본 프로젝트 코드를 로컬에 다운로드합니다.(or clone)

## 환경세팅
```
CLI 기준으로 설명합니다.
1. cd ~/practice-react ## 본인 로컬에 다운로드 받은 프로젝트 위치로 이동합니다. 
2. .env.example 파일을 복사하여 .env 파일을 생성합니다
    2.1 .env 파일의 REACT_APP_DAILY_CORONA_STATUS_API_SERVICE_KEY 값은 개발자에게 문의바랍니다.
3 docker pull lzao/daily-corona-status:latest
4 docker run -d -p 3000:3000 -v {document_root}:/app -e CHOKIDAR_USEPOLLING=true --name node lzao/daily-corona-status:latest
5 docker exec node npm install && npm start
```

## 개발환경 세팅
https://www.notion.so/monssosa/549d6b33cf984153aadb2a5e5ce25727

## 실행화면
http://localhost:3000 으로 접속하여 아래 화면이 나오는 지 확인합니다.
![5](https://user-images.githubusercontent.com/15684441/143533704-33f0952b-ae1d-4639-a3c7-29e74a33f70a.png)


