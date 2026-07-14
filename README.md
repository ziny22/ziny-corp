# 포트폴리오 웹사이트

바이브코딩으로 만드는 개인 포트폴리오입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 만들어진 싱글 페이지 사이트로, 소개(About) / 프로젝트 / 스킬 / 연락처 섹션으로 구성되어 있습니다.

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 내용 수정하기

사이트에 표시되는 이름, 소개글, 프로젝트 목록, 스킬, 연락처 정보는 모두 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리됩니다. 이 파일만 수정하면 사이트 전체 내용이 바뀝니다.

프로필 사진은 현재 `public/profile.svg` 플레이스홀더로 되어 있습니다. 실제 사진으로 교체하려면:

1. `public/` 폴더에 사진 파일(예: `profile.jpg`)을 추가
2. `src/data/portfolio.ts` 의 `profile.avatar` 값을 새 경로로 변경

## 빌드 / 검사

```bash
npm run build   # 프로덕션 빌드
npm run lint    # ESLint 검사
```

## 배포

- **Vercel**: GitHub 저장소를 연결하면 별도 설정 없이 자동으로 빌드·배포됩니다.
- **Netlify**: 저장소를 연결하면 `@netlify/plugin-nextjs` 가 자동 적용되며, 빌드 명령은 `npm run build` 입니다.
