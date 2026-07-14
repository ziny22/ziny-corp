// 이 파일에 있는 내용을 수정하면 사이트 전체 콘텐츠가 바뀝니다.
// 아래 값들은 예시(플레이스홀더)입니다. 본인 정보로 교체하세요.

export type Project = {
  title: string;
  period: string;
  description: string;
  tags?: string[];
  link?: string;
  repo?: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type HistoryItem = {
  period: string;
  role: string;
};

export const profile = {
  name: "황유지",
  role: "AI 프로덕트&전략 담당",
  tagline: "사용자 경험을 고민하는 AI 프로덕트&전략 담당 입니다.",
  bio: [
    "저는 기술과 사용자, 사업을 연결하는 동시에 사람과 조직의 가능성을 끌어내는 리더입니다. 네이버 UX 연구원으로 시작해 카카오톡 서비스 플랫폼, 포털 다음, AI 메신저 카나나까지 다양한 디지털 서비스의 변화와 성장을 이끌어왔습니다.",
    "카카오톡 비즈보드 도입, 다음CIC 사업 체질 개선, 생성형 AI 기반 신규 서비스 구축 등 쉽지 않은 과제를 맡아왔지만, 성과만큼 중요하게 생각한 것은 구성원이 방향을 이해하고 자신의 역할에 의미를 느끼는 조직을 만드는 일이었습니다.",
    "저는 정답을 일방적으로 제시하기보다 현장의 목소리를 듣고, 서로 다른 강점을 연결해 함께 해답을 만들어가는 리더십을 지향합니다. 앞으로도 기술과 사업의 변화를 사람의 성장으로 이어지게 하며, 오래 지속되는 성과와 건강한 조직문화를 함께 만들어가고자 합니다.",
  ],
  avatar: "/ziny.jpeg",
} as const;

export const history: HistoryItem[] = [
  { period: "2026.03 ~ 현재", role: "카카오 메이커스 서비스 총괄리더 / Senior Vice President" },
  { period: "2023.03 ~ 2026.02", role: "카카오 카나나 AI서비스 총괄리더 / Senior Vice President" },
  { period: "2022.03 ~ 2023.03", role: "카카오 다음CIC CEO / Senior Vice President" },
  { period: "2019.11 ~ 2022.03", role: "카카오톡 서비스플랫폼실 실장 / Vice President" },
  { period: "2013.09 ~ 2019.11", role: "카카오 UX 디자인설계팀 팀장" },
  { period: "2008.02 ~ 2013.09", role: "네이버 UX팀 책임연구원" },
];

export const projects: Project[] = [
  {
    title: "카카오메이커스 사업·서비스 혁신",
    period: "2026.03 ~ 현재",
    description:
      "카카오의 대표 임팩트 커머스인 메이커스의 사업과 서비스를 총괄하며, 거래액 성장과 브랜드 가치 강화를 위한 전략을 추진하고 있습니다. 상품 소싱 체계, 카테고리 전략, 고객 유입 및 재구매 구조, 플랫폼 운영 체계를 개선하고 지속 가능한 커머스 성장 기반을 구축하고 있습니다.",
  },
  {
    title: "생성형 AI 기반 신규 서비스 '카나나' 기획·구축",
    period: "2023.03 ~ 2026.02",
    description:
      "카카오 AI 서비스 전담조직의 총괄리더이자 Product Owner로서 신규 AI 서비스의 전략 수립, 서비스 콘셉트 제안, 조직 구성 및 제품 개발 전 과정을 주도했습니다. AI 엔지니어링·개발·기획·디자인 조직을 하나의 목적조직으로 구성해 서비스 출시와 운영을 이끌었습니다.",
  },
  {
    title: "포털 다음 사업 턴어라운드",
    period: "2022.03 ~ 2023.03",
    description:
      "다음CIC CEO로서 포털 다음의 서비스 전략과 사업 전반을 총괄했습니다. 통합검색, PC·모바일 서비스를 전면 개편해 사용자 트래픽을 10% 이상 높였으며, 광고 효율 개선과 저효율 서비스 최적화를 통해 매출을 15% 성장시켰습니다.",
  },
  {
    title: "카카오톡 비즈보드 도입 및 광고사업 성장",
    period: "2019.11 ~ 2022.03",
    description:
      "카카오톡의 대표 광고상품인 비즈보드의 콘셉트 기획부터 프로토타이핑, 사용자 테스트, 출시까지 전 과정을 리딩했습니다. 사용자 경험을 훼손하지 않는 광고 모델을 구현해 카카오톡의 수익화를 본격화했으며, 이후 모바일 디스플레이 광고의 대표적인 상품 모델로 정착시켰습니다.",
  },
  {
    title: "카카오톡 플랫폼 및 신규 서비스 확장",
    period: "2019.11 ~ 2022.03",
    description:
      "카카오톡 서비스 운영과 개편을 총괄하며 카카오톡 뷰, 톡서랍, 톡명함, 이모티콘 플러스, 카카오 지갑 등 다수의 신규 서비스 기획과 실행을 이끌었습니다. 메신저 중심의 카카오톡을 콘텐츠·구독·인증·비즈니스가 결합된 생활 플랫폼으로 확장했습니다.",
  },
];

export const skills: Skill[] = [
  {
    category: "Strategy",
    items: [
      "AI Service Strategy",
      "Platform Strategy",
      "Business Transformation",
      "Growth Strategy",
      "New Business Development",
    ],
  },
  {
    category: "Product",
    items: [
      "Product Vision",
      "Product Ownership",
      "Service Planning",
      "UX Strategy",
      "Prototyping",
      "User Research",
      "Data-driven Decision Making",
    ],
  },
  {
    category: "Business",
    items: [
      "Monetization",
      "Advertising Business",
      "Commerce",
      "Subscription",
      "Platform Ecosystem",
      "P&L Management",
    ],
  },
  {
    category: "Execution",
    items: [
      "Cross-functional Leadership",
      "Organization Building",
      "Stakeholder Alignment",
      "Agile Product Development",
      "Large-scale Service Launch",
    ],
  },
  {
    category: "Domain Expertise",
    items: [
      "Generative AI",
      "Messenger",
      "Portal",
      "Digital Advertising",
      "Commerce",
      "Payments",
      "Content Platform",
    ],
  },
];

export const contact = {
  email: "uzuz.hwang@gmail.com",
  phone: "82-10-8739-0518",
} as const;
