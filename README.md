
## `Rest API`
<details>
<summary>API</summary>
API란? 

Application Programming Interface의 준말이다.   
interface는 무엇인가와 상호작용하는 방법이다.   
TV의 리모콘에서 사용자가 버튼을 누르면 TV가 켜지는데, 이때 사용자가 누르는 버튼을 interface라고 한다.   
말 그대로 Application Programming에서의 특정 기능을 사용, 정보수집 등의 상호작용을  위한 수단 이라고 보면 된다.
</details>

<details>
<summary>REST API</summary>
REST API란?

서로 다른 서버 간의 통신에서 REST api를 사용하면 그 통신은 url로 이루어진다.    
예를들어 수백만개의 영화 정보를 데이터베이스에 저장된 서버가 있다고 가정할때,   
영화 정보에 대한 데이터를 정렬하여 출력하고 싶다면 서버로부터 모든 영화 정보에 대한 데이터를 가져와야 한다.   
이러한 상호작용에 필요한것이 URL이다.    
`/~/api/movies`   
위와같은 URL을 통해 request를 만든다.    
해당 url은 천개, 백만개의 영화정보 데이터를 담은 JSON 배열을 반환할것이다.    
이와같이 리소스나 리소스목록을 얻어올 때, 위와같이 url을 사용한다.
이 경우에는 영화정보가 리소스이다.
해당 url을 공개적으로 노출시킴으로써 서로 다른 서버에서 url에 요청하는것에 대한 접근을 허용하게 된다.

url의 파라미터를 통해 디테일한 조건으로 데이터를 받아올 수 있게 된다.
movie id가 1인 리소스 `/~/api/movies/1`
평점이 9점인 리소스 `/~/api/movies/search?rating=9`
</details>

<details>
<summary>Resource</summary>
Resource란?

기본적으로 리소스는 웹 사이트에 접속하거나 API를 호출할 때 서버로부터 제공받는 식별 가능한 자원들을 의미한다.   
텍스트나 이미지, 동영상 등과 같은 것들을 말한다.    
그러나 확장자를 가지는 정적인 파일들 외에 개념적으로 식별할 수 있으면 리소스가 될 수 있다.    
어떤 식당의 메뉴들을 보여줘! 라는 요청이 존재한다면 `메뉴` 와 `특정 식당` 이 리소스가 될 수 있다는 것이다.   
`/~/menus` 여기서 menus는 정적인 파일들을 의미하는 것이 아니라 메뉴라는 자원들을 의미하는 것이고,     
이렇게 식별 가능한 자원을 리소스라고 부른다. (특정 지을 수 있는 대상들에 대한 식별자)   

예를들어 /users/:id/followers 라는 url이 존재한다면 여기서 리소스는 `users`와 `followers`가 된다.   
15번 user를 follow하는 사람들을 의미하기 때문이다.    

</details>

<details>
<summary>HTTP 메소드</summary>
HTTP 메소드

일반적으로 URL에 동사를 넣는 것은 좋은 방법이 아니다.   
생성과 관련된 기능에서 명사를 사용한다면 create/add/upload등 일관적이지 못하기 때문이다.    
대신 HTTP메소드에 의존한다.   
기본적으로 웹 사이트에 정보에 대한 요청을 보낼 때 브라우저는 항상 GET요청을 보낸다.   
그 외에도 POST, DELETE PUT, PATCH 등이 있다.    
이러한 HTTP 명세를 통해 API가 더 많은 일을 할 수 있도록 해준다.

- GET /2/users/yoo/bookmarks
- POST /2/users/yoo/bookmarks

즉 메소드 방식에 따라 동일한 URL 임에도 조회 뿐만 아니라 수정, 삭제도 가능해진다.   

 `PUT, DELETE에 대한 오해`  
https://blog.naver.com/choo_co/221276997559   
https://mokpo.tistory.com/202
https://late90.tistory.com/353

</details>


# GraphQL API - Apollo Server

# 프로젝트 세팅

## 셋업
노드 프로젝트 초기화 
```
> npm init -y
```

Apollo Server, GraphQL 설치
```
> npm i apollo-server graphql
```

nodemon 설치 (devDependencies)
```
> npm i nodemon -D
```

## package.json 수정

```json
"scripts": {
  // "test": "echo \"Error: no test specified\" && exit 1" //삭제한다.
  "dev" : "nodemon server.js" //추가한다.
}
```
npm run dev 명령어로 nodemon을 실행하면   
타겟으로 적어둔 server.js의 내용을 변경하고 저장할 때마다   
nodemon이 서버를 재시작 시켜준다.

import문 사용을 위한 설정 추가
```json
  "devDependencies": {
    "nodemon": "^3.0.3"
  },
  "type" : "module" // 최 하단에 추가한다.
```

```js
const {ApolloServer, gql} = require("apollo-ser ver") // 이 방식에서 (여전히 사용 가능)
import {ApolloServer, gql} from "apollo-server" // 이 방식으로 사용할 수 있게 된다
```