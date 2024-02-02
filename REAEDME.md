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