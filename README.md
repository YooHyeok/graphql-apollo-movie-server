
# *Rest API*
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
<br/>

 # *grpahQL*
<details>
<summary>grpahQL 이란?</summary>

GraphQL은 하나의 명세이다.    
2012년 부터 FaceBook 모바일 어플리케이션이 GraphQL을 사용을 시작했다.   
GraphQL Spec은 2015년 부터 오픈소스로 공개되었다.   
명세는 어떻게 동작하는지 적혀있을 뿐이므로, 그것을 javascript로 최초로 구현한것이 GraphQL-js이다.   
`GraphQL Spec`  
https://github.com/graphql/graphql-spec   

GraphQL API는 RestAPI에 대한 직접적인 해결책이다.

RestAPI는 아주 큰 문제를 두가지 가지고 있다.    
첫번째는 over-fetching이고 두번째는 under-fetching이다.
GraphQL API는 RestAPI의 두 문제를 해결하는데 도움을 준다.
</details>
<details>
<summary>over-fetching</summary>

over-fetching이란, 내가 사용하지 않는 데이터라도 정형화된 틀로 제공되는 모든 data를 받는다는것을 의미한다.    
즉, 특정 api에서 내가 필요한 데이터 이상의 데이터를 받게 된다.    
정형화 된 틀의 데이터 양식(JSON)으로 내보내는 내가 사용하지 않는 데이터를 포함한 모든 데이터를 받게된다는 것이다.   
예를들어 나는 title 데이터만 출력하는 기능을 만들고 싶어서 RestAPI로 데이터를 조회했는데, title뿐만 아니라 title을 포함한 25개의 연관 데이터를 받게 된다는 것이다.    
이는 해당 데이터들을 제공하는 Backend 서버나 DataBase에서 필요 이상의 기회비용이 발생하는것을 의미한다.   
또한 backend에서 frontend로 전송하는 데이터량이 많아진것 이므로 전송이 느릴수 있다.   
GrpahQL은 URL로 data를 즉시 받지 않고 필요한 data만을 요청한다.   
GraphQL Query를 API에 보내면 정확히 요청한 것만 받는다.   

### `GraphQL Query`
```graphql
{
  hello: {
    name
    height
    mass
  }
}
```
### `Response JSON`
```json
{
  "hello": {
    "name": "Luke Skywaler",
    "height": "1.72",
    "mass": "77",
  }
}
```

위의 GraphQL Query를 API에 요청한다면 Response JSON 형태의 데이터를 반환받게 된다.    
json의 hello속성의 객체중 name, height, mass 속성 데이터만 뽑아 그 형태를 유지하여 받게 된다.

</details>

<details>
<summary>under-fetching</summary>

under-fetching이란 한번의 url 요청으로 필요한 모든 데이터 요청을 처리하지 못하는것을 의미한다.    

예를들어 특정 영화의 제목과 장르 정보를 가져오려고 하는데, 해당 API는 영화의 제목과 장르에 대한 분류번호를 제공한다.    
이때 장르에 대한 명확한 단어를 얻기 위해서는 해당 분류번호를 가지고 새로운 API에 각 분류번호에 해당하는 장르 제목을 리소스로 요청하거나,    
분류번호에 해당하는 장르제목 리스트 데이터 리소스를 반환받아 백엔드 서버 내부적으로 일치하는 데이터를 검증하여 처리해야한다.   
만약 첫번째만 이라면 단순히 under-fetching인데 두번째 경우라면 under-fetching뿐만 아니라 over-fetching 문제도 발생하게 된다.   
(필요한 장르번호에 해당하는 리소스만 요청하는 것이 아닌 필요없는 모든 장르를 다 가져오기 때문...)   


</details>

<br/>

# *GraphQL API - Apollo Server*

## `프로젝트 세팅`
<details>
  <summary>[ 세팅 상세보기 ]</summary>

  　
  - 노드 프로젝트 초기화 
    ```
    > npm init -y
    ```

 - Apollo Server, GraphQL 설치
    ```
    > npm i apollo-server graphql
    ```

 - nodemon 설치 (devDependencies)
    ```
    > npm i nodemon -D
    ```

 - package.json 수정    
  `nodemon 실행 명령 script 설정`
    ```json
    "scripts": {
      // "test": "echo \"Error: no test specified\" && exit 1" //삭제한다.
      "dev" : "nodemon server.js" //추가한다.
    }
    ```
    npm run dev 명령어로 nodemon을 실행하면   
    타겟으로 적어둔 server.js의 내용을 변경하고 저장할 때마다   
    nodemon이 서버를 재시작 시켜준다.

    `import문 사용을 위한 설정`
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
</details>
 <br/>
 <hr/>

# *Apollo-Server*
Apollo server는 GraphQL을 해석하는 오픈소스 서버이다.
GraphQL은 Specification(명세)일 뿐이고, 이것을 구현하기 위해서는 실제 코드를 작성해야 한다.
그게 바로 Apollo server인것이다.
Apollo server하나만 있어도 node.js server처럼 작동한다.

만약 express, fastify, hapi, coap등 가지고 있는 어떤 node.js backend라도
Apollo server 최상단에 추가할 수 있다.

예를들어 express로 만들어진 RestAPI가 있다고 해 보자.
RestAPI를 GraphQL API로 바꿔주고 싶다면 server를 그렇게 많이 수정하지 않아도 된다.
middleware를 추가해주기만 하면 된다.
자체적인 studio로 graphQL api를 explore할 수 있게 해준다.
graphQL API와 상호작용하는 grahpiQL와 비슷, 버튼도 더 많고 다크모드 등등을 지원한다
```js
const server = new ApolloServer({null})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) 
```
위와 같이 서버를 생성한다.


## GraphQL Scheme - SDL
GraphQL 데이터를 조회하기 위해서는 먼저 조회할 데이터의 Scheme를 정의해 줘야 한다.

```javascript
const typeDefs = gql`

`
const server = new ApolloServer({typeDefs})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) 
```
위와같이 gpl`` 문법을 특정 변수에 저장해 ApolloServer에 저장한다.
우리는 이를 SDL이라고 부른다.
SDL은 Query Type을 필수로 요구한다.

```js
const typeDefs = gql`
  type Query {
  # 요청할 데이터(필드)
    text: String
  }
`
```
type Query는 사용자가 원하는 request 대상이다.    
type Query 안에 선언하는 필드들은 사용자가 조회하길 원하는 데이터들이고
이를 RestApi URL로 표현하자면 *`GET /text`* 와 같다.

## Root Type (type Query)
Query, Mutation, Subscription 등이 있다.
쿼리, 변경, 실시간 데이터를 처리하는데 사용된다.
```graphQL
type Query {
  # 요청할 데이터(필드)
}
```

## Scalar Type
graphQL에 내장되어있는 타입 종류중 하나이다.
 - String : 문자열
 - Int : 정수
 - Boolean : 불린
 - ID : id값임을 명시적으로 표현하기 위해 사용. 내부적으로는 String형태와 동일
 - Float : 실수

```graphql
type User { # 사용자 지정 타입으로 데이터베이스의 관계에 따라 결정된다.
    id: ID
    username: String 
  }
type Tweet { # allTweets이 반환하는 사용자 지정 type이다.
    id: ID #스칼라타입
    text: String #스칼라타입
    author: User #사용자지정타입
  }

  type Query { # root type
    allTwwets: [Tweet] # Tweet 타입 형태의 List를 반환한다.
    tweet: Tweet
  }
```

## Custom Object Type
사용자가 직접 타입을 지정한다.

## Argument
restAPI에서 어떠한 리소스를 요청할지에 대한 조건값이다
ex) /api/v1/tweets/`:id`
타입스크립트의 function형태와 비슷하다.
Query의 request 필드에 괄호를 지정하고 그 안에 argument 이름과 타입을 지정해준다.

```graphQL
  type Query {
    tweet(id: ID): Tweet
  }
```

이렇게 하면 서버에서는 아래와 같이 출력해준다

```graphql
tweet(id: ID): Tweet
```

완성된 샘플 query의 조회 문법은 아래와 같다.

```graphql
 # Query SDL
type User {
  id: ID
  username: String 
}

type Tweet { 
  id: ID
  text: String
  author: User
}

type Query { 
  allTwwets: [Tweet] 
  tweet(id: ID): Tweet
}
  
 # Operation
query($tweetId: ID){
  allTwwets { # GET: /api/v1/tweets
    text
    id
    author {
      id
      username
    }
  }
  tweet(id: $tweetId) { # GET: /api/v1/tweet/:id
    text
    id
    author {
      id
      username
    }
  }
}
```

## Mutation Type
POST request 기능으로 사용자가 보낸 data로 mutate하는 동작들을 모두 넣는다.   
database, cache, server 등 backend를 mutate하는 동작들을 넣는다.    
만약 사용자로부터 하여금 data를 보내게 해서 backend를 mutate하게 하고 싶거나,     
혹은 업로드 하고 싶거나 database를 수정하고 cache를 지우고 logout기능을 작동하게 만들고 싶다면
어떠한 것이든지 간에 그게 mutation한 것이라면 Mutation에 넣어줘야 한다.

Query Type에 field를 만드는 것은 restAPI에서 GET Http method로 url을 만들고 노출시키는것과 같다.    
Mutation Type에 field를 만드는것은 url을 노출시키고 POST Http method로 그것을 관리하는것과 같다.

`수정/추가 Mutation`
```graphql
type Mutation {
  postTweet(text: String, userId: ID): tweet 
}
```

```graphql
mutation ($text: String, $userId: ID) {
  postTweet(text: $text, id: $userId) {
    id
    text
  }
}
```
`삭제 Mutation`
```graphql
type Mutation {
  deleteTweet(text: String, userId: ID): Boolean #id에 해당하는 tweet을 삭제한 후 삭제 성공 여부를 반환한다.
}
```

```graphql
mutation ($text: String, $userId: ID) {
  deleteTweet(userId: $userId)
}
```

## Non Nullable (Fields & Arguments)

Fields 혹은 Arguments에 null을 허용해 주지 않는다.

```graphQL
  type Tweet { 
    id: ID
    text: String
    author: User
  }
  type Query {
    tweet(id: ID): Tweet
  }
```
기본적으로 graphQL의 타입은 null을 허용해준다.

```graphQL
  type Tweet { 
    id: ID|null
    text: String|null
    author: User|null
  }
  type Query {
    tweet(id: ID|null): Tweet|null
  }
```

만약 Field와 Argument를 null을 허용하지 않는 필수사항으로 설정하고 싶다면, 끝에 !느낌표를 추가한다.
```graphQL
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    tweet(id: ID!): Tweet!
  }
```

```graphQL
query Tweet($tweetId: ID!) {
  tweet {
    id
    text
    author
  }

}
```
위와같이 tweet에 아무런 매개변수를 받지 않는다면 다음과 같은 오류가 발생한다.
Field "tweet" argument "id" of type "ID!" is required, but it was not provided.

```graphQL
query Tweet($id: ID!) {
  tweet(id: $id) {
    id
    text
    author
  }
}
```

또한 argument가 아닌 field인 경우 해당 field를 항상 return할것이라는 뜻이다.
null을 return하지 않는다고 확실히 하는 것이다.

```graphQL
  type Query {
    allTweets1: [Tweet!]! # allTweet은 오직 null이 아닌 Tweet타입의 리스트를 필수로 반환한다.
    allTweets2: [Tweet]! # allTweet은 null을 허용하는 Tweet타입 리스트를 필수로 반환한다.
  }
```

## Query Resorvers
resolver 함수는 데이터베이스에 액세스 한 다음 데이터를 반환한다.

객체 형태로 기능 단위로 요청을 처리할 함수들을 정의하고, 정의한 함수 객체를 ApolloServer의 Object 타입 파라미터 2번째 속성에 적용한다.    
이때 정의할 함수명은 GraphQL SDL에 정의한 type이름, 메소드명과 일치해야한다.

```js
import {ApolloServer, gql} from "apollo-server"

const typeDefs = gpl`
  type Query {
    method(arg: type): 
  }
`
const resolvers = {
  Query : {
    method(root, arg): {
      /* 구현*/ 
    }
  }
}

new ApolloServer({typeDefs, resolvers}).listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) 
```

아래와 같이 임시 데이터를 만들어서 간단하게 구현해본다.

```js
import {ApolloServer, gql} from "apollo-server"

/**
 * 임시 데이터
*/
const datas = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "1",
    text: "second one!",
  }
]

const typeDefs = gpl`

  type Data {
    id: ID!
    text: String!
  }

  type Query {
    data(id: ID): Data
    datas: [Data]!
  }
`

const resolvers = {
  Query : {
    data(root, arg) {
      return datas.find(data => data.id === arg.id)
    },
    datas() {
      return datas
    }

  }
}

new ApolloServer({typeDefs, resolvers}).listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) 

```
`[ GrpahQL Request & Response ]`
```graphQL
/* =============== Operation ================ */

query Query($id: ID!) {
  data(id: $id) {
    id
    text
  }
  datas {
    id
    text
  }
}
/* =============== Variables ================ */
{
  "id": "1"
}
/* ================ Results ================= */
{
  "data": {
    "data": {
      "id": "1",
      "text": "first one!"
    },
    "datas": [
      {
        "id": "1",
        "text": "first one!"
      },
      {
        "id": "1",
        "text": "second one!"
      }
    ]
  }
}
```
SDL에서의 datas는 Data타입의 리스트 형태를 반환한다.
resolver 함수는 datas 리스트 데이터를 반환하고 있다.
GrpahQL쿼리에서 리스트 형태의 데이터를 반환하는 쿼리를 작성할 때는
해당 리스트에 저장되는 객체 타입을 지정해줘야 한다.
따라서 위와 같이 datas라는 함수명 이후 객체 블록을 선언해주고 해당 객체의 형태에 맞는 필드들을 나열해준다.

#### argument를 무시할때는 파라미터 명을 _ 혹은 __로 처리한다.

## Mutation Resolver

데이터를 Mutation하는 예제를 아래 코드로 구현해본다.

```js
import {ApolloServer, gql} from "apollo-server"

/**
 * 임시 데이터
*/
const datas = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "1",
    text: "second one!",
  }
]

const typeDefs = gpl`

  type Data {
    id: ID!
    text: String!
  }

  type Mutation {
    postData(id: ID!, text: String!): Data!
  }
`

const resolvers = {
  Mutation : {
    postData(_, arg) {
      const newData = {
        id: datas.length + 1,
        text: arg.text
      }
      datas.push(newData) /* 추가하고 */
      return newData; /* 추가한 데이터만 반환 */
    }

  }
}

new ApolloServer({typeDefs, resolvers}).listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) 

```
`[ GrpahQL Request & Response ]`
```graphQL
/* =============== Operation ================ */

query Mutation($id: ID!, $text: String) {
  postData(id: $id, text: $text) {
    id
    text
  }
}
/* =============== Variables ================ */
{
  "id": "1",
  "text": "메롱"
}
/* ================ Results ================= */
{
  "data": {
    "postData": {
      "id": "3",
      "text": "메롱"
    }
  }
}
```