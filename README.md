# photo-blog

## 배포 
https://effortless-meerkat-d76967.netlify.app/

## 구현된 기능
- velog 게시글 썸네일용 이미지 랜덤 생성(이미지 개수 = 8) 
- 없는 이미지 발생 시 자동 재생성 기능
- 생성된 이미지 일괄 삭제
- 개별 이미지 다운로드  

## 구현할 기능
- 개별 이미지 제목 입력 기능

### 가능할까?
- velog 소셜 로그인/회원가입 
- (회원 velog 주소를 바탕으로) 본인 velog의 시리즈 title과 게시글 title을 크롤링하는 기능 
- (회원 velog 주소를 바탕으로) 시리즈마다 동일한 이미지를 일괄 적용하기위해 특정 시리즈title마다 이미지 업로드 및 DB에 이미지 링크주소 저장 기능
- 특정 시리즈title마다 업로드한 이미지 위에 시리즈 title과 게시글 title 텍스트를 자동 입력하는 기능
- 최종 이미지 생성 -> 게시글 title명으로 이미지 저장
- velog 본인 인증정보와 게시글 update API를 활용하여 각 게시글의 썸네일 이미지 일괄 업로드 기능 

## 참조
- 프로그래머스 무료 강의 `AI서비스와 함께 누구나 만드는 웹 프로젝트! feat. ChatGPT`
- https://wonkooklee.github.io/thumbnail_maker/
