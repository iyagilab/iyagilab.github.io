npm install -g gatsby-cli

#### 시작

npm start

"start": "gatsby develop",
"build": "gatsby build",
"clean": "gatsby clean"

#### npm 최신버전 업데이트

npm install -g npm-check-updates
ncu -u

#### 배포

npm install gh-pages --save-dev
npm install gatsby-plugin-canonical-urls --force
yarn deploy

####

npm start
yarn deploy

### 파일구조

```jsx
개츠비
|── src
│   ├── components // 컴포넌트
│   ├── content // 게시글 관련
│   │   ├── pages // 개별 페이지(보라, 블로그 소개)
│   │   ├── posts // (블로그 컨텐츠, mdx제목에 날짜 포맷 잘지켜야함), 게시글 작성하는 곳
│   ├── images //기타 사진 (없애거나 content속으로 넣기)
│   ├── pages // 404 에러
│   ├── style // 메인색상팔레트
│   ├── templates // graphql 관련 쿼리 포함 템플릿
│   │   ├── home.js // 썸네일 관련 코드 있음
├── gatsby-browser.js
├── gatsby-config.js // 프로젝트 정보 수정 가능
├── gatsby-node.js
├── gatsby-ssr.js
├── index.js
```
