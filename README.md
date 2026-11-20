# MusicTown 홍보 사이트

React + TypeScript + Vite. 시작 버튼은 실제 웹앱 https://music-town.gayadi.site/ 로 연결됩니다.

## 실행

Node.js 22.12 이상. 첫 설치는 `npm ci`, 개발 서버는 `npm run dev`, 프로덕션 빌드는 `npm run build`, 빌드 미리보기는 `npm run preview`입니다.

## 구조

- `src/components`: 공통 레이아웃, 시작 버튼, 릴리즈 카드
- `src/pages`: 홈, 릴리즈 목록·상세
- `src/hooks`: 해시 기반 화면 전환
- `src/utils`: 날짜 표시
- `src/types`: 콘텐츠 타입
- `src/data`: 앱 소개, 링크, 릴리즈 데이터
- `src/styles`: 전역·반응형 스타일
- `public/images`: 실제 앱 화면, 로고·캐릭터, 홍보용 배경 이미지

## 업데이트 게시

`src/data/releases.ts` 배열 맨 앞에 새 릴리즈를 추가하면 홈, 목록, 상세에 반영됩니다. 고유 버전과 `YYYY-MM-DD` 날짜, GitHub 릴리즈 원문 URL을 작성한 다음 빌드·배포하세요. 자동 동기화나 관리자 기능은 없습니다.

## 배포

`npm ci`와 `npm run build`를 실행한 뒤 `dist/`를 정적 호스팅에 게시합니다. 해시 라우팅이므로 서버 경로 재작성 설정이 필요하지 않습니다. 홍보 사이트는 실제 웹앱과 별도 도메인으로 설정하세요. 운영 배포는 아직 연결하지 않았습니다.

## 콘텐츠 출처

앱 소개: https://github.com/TEAM-DOONOW/MusicTown 의 README (2026-11-16 확인). 릴리즈: 같은 저장소의 v0.2.0 및 v0.1.0. 공원·캐릭터·공연·음향 설정 화면은 사용자가 제공한 앱 스크린샷입니다. 메인 배경은 실제 앱 화면을 참고해 생성한 홍보용 일러스트입니다.

Nintendo의 로고·캐릭터·이미지는 사용하지 않습니다. 제공된 `busking-town-logo.png`와 `animal.png`를 로고와 캐릭터로 사용합니다. 동물 시트는 SVG 표시 영역으로 캐릭터별 표시합니다. 주아체와 Pretendard를 로컬 제공하며 글꼴 라이선스는 `public/fonts/`에 포함했습니다.
