// 이 파일에 있는 내용을 수정하면 사이트 전체 콘텐츠가 바뀝니다.
// 아래 값들은 예시(플레이스홀더)입니다. 본인 정보로 교체하세요.

export type Skill = {
  category: string;
  items: string[];
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
