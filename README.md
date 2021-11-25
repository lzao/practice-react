# 대한민국 일일 코로나 현황

대한민국의 일별 코로나 현황을 보여줍니다.

## 환경세팅
사전 작업에 도커 머신이 설치 되어 있어야 합니다.
```
1 .env.example 파일을 복사하여 .env 파일을 생성합니다.  
2 docker pull lzao/daily-corona-status:latest
3 docker run -itd -p 3000:3000 -v {document_root}:/app -e CHOKIDAR_USEPOLLING=true --name node lzao/daily-corona-status:latest
4 docker exec node npm start
```
😀
