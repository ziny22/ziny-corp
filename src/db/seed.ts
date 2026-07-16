import { db } from "./index";
import { careers, projects } from "./schema";

// src/data/portfolio.ts의 `history`를 옮긴 값입니다.
// 원본은 "YYYY.MM ~ YYYY.MM" 문자열이라 day는 모두 01로 채웠습니다.
const careerSeed = [
  {
    company: "카카오",
    title: "메이커스 서비스 총괄리더 / Senior Vice President",
    startDate: "2026-03-01",
    endDate: null,
  },
  {
    company: "카카오",
    title: "카나나 AI서비스 총괄리더 / Senior Vice President",
    startDate: "2023-03-01",
    endDate: "2026-02-01",
  },
  {
    company: "카카오",
    title: "다음CIC CEO / Senior Vice President",
    startDate: "2022-03-01",
    endDate: "2023-03-01",
  },
  {
    company: "카카오",
    title: "카카오톡 서비스플랫폼실 실장 / Vice President",
    startDate: "2019-11-01",
    endDate: "2022-03-01",
  },
  {
    company: "카카오",
    title: "UX 디자인설계팀 팀장",
    startDate: "2013-09-01",
    endDate: "2019-11-01",
  },
  {
    company: "네이버",
    title: "UX팀 책임연구원",
    startDate: "2008-02-01",
    endDate: "2013-09-01",
  },
];

// src/data/portfolio.ts의 `projects`를 옮긴 값입니다. day는 careers와 동일하게 01로 채웠습니다.
const projectSeed = [
  {
    title: "카카오메이커스 사업·서비스 혁신",
    description:
      "카카오의 대표 임팩트 커머스인 메이커스의 사업과 서비스를 총괄하며, 거래액 성장과 브랜드 가치 강화를 위한 전략을 추진하고 있습니다. 상품 소싱 체계, 카테고리 전략, 고객 유입 및 재구매 구조, 플랫폼 운영 체계를 개선하고 지속 가능한 커머스 성장 기반을 구축하고 있습니다.",
    startDate: "2026-03-01",
    endDate: null,
  },
  {
    title: "생성형 AI 기반 신규 서비스 '카나나' 기획·구축",
    description:
      "카카오 AI 서비스 전담조직의 총괄리더이자 Product Owner로서 신규 AI 서비스의 전략 수립, 서비스 콘셉트 제안, 조직 구성 및 제품 개발 전 과정을 주도했습니다. AI 엔지니어링·개발·기획·디자인 조직을 하나의 목적조직으로 구성해 서비스 출시와 운영을 이끌었습니다.",
    startDate: "2023-03-01",
    endDate: "2026-02-01",
  },
  {
    title: "포털 다음 사업 턴어라운드",
    description:
      "다음CIC CEO로서 포털 다음의 서비스 전략과 사업 전반을 총괄했습니다. 통합검색, PC·모바일 서비스를 전면 개편해 사용자 트래픽을 10% 이상 높였으며, 광고 효율 개선과 저효율 서비스 최적화를 통해 매출을 15% 성장시켰습니다.",
    startDate: "2022-03-01",
    endDate: "2023-03-01",
  },
  {
    title: "카카오톡 비즈보드 도입 및 광고사업 성장",
    description:
      "카카오톡의 대표 광고상품인 비즈보드의 콘셉트 기획부터 프로토타이핑, 사용자 테스트, 출시까지 전 과정을 리딩했습니다. 사용자 경험을 훼손하지 않는 광고 모델을 구현해 카카오톡의 수익화를 본격화했으며, 이후 모바일 디스플레이 광고의 대표적인 상품 모델로 정착시켰습니다.",
    startDate: "2019-11-01",
    endDate: "2022-03-01",
  },
  {
    title: "카카오톡 플랫폼 및 신규 서비스 확장",
    description:
      "카카오톡 서비스 운영과 개편을 총괄하며 카카오톡 뷰, 톡서랍, 톡명함, 이모티콘 플러스, 카카오 지갑 등 다수의 신규 서비스 기획과 실행을 이끌었습니다. 메신저 중심의 카카오톡을 콘텐츠·구독·인증·비즈니스가 결합된 생활 플랫폼으로 확장했습니다.",
    startDate: "2019-11-01",
    endDate: "2022-03-01",
  },
];

async function seed() {
  const existingCareers = await db.select({ id: careers.id }).from(careers).limit(1);
  if (existingCareers.length === 0) {
    await db.insert(careers).values(careerSeed);
    console.log(`Inserted ${careerSeed.length} careers rows.`);
  } else {
    console.log("careers already has rows, skipping.");
  }

  const existingProjects = await db.select({ id: projects.id }).from(projects).limit(1);
  if (existingProjects.length === 0) {
    await db.insert(projects).values(projectSeed);
    console.log(`Inserted ${projectSeed.length} projects rows.`);
  } else {
    console.log("projects already has rows, skipping.");
  }

  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
