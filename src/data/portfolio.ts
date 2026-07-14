// 이 파일에 있는 내용을 수정하면 사이트 전체 콘텐츠가 바뀝니다.
// 아래 값들은 예시(플레이스홀더)입니다. 본인 정보로 교체하세요.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export const profile = {
  name: "황유지",
  role: "UX디자이너",
  tagline: "사용자 경험을 고민하는 UX디자이너 입니다.",
  bio: "안녕하세요! 웹 기술로 아이디어를 실제 서비스로 만드는 것을 좋아하는 개발자입니다. 새로운 것을 배우고 만드는 과정을 즐기며, 꾸준히 성장하고 있습니다.",
  avatar: "/ziny.jpeg",
} as const;

export const projects: Project[] = [
  {
    title: "프로젝트 이름 1",
    description: "이 프로젝트에 대한 간단한 설명을 작성하세요. 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 적어보세요.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
    repo: "https://github.com/your-id/your-repo",
  },
  {
    title: "프로젝트 이름 2",
    description: "이 프로젝트에 대한 간단한 설명을 작성하세요.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/your-id/your-repo",
  },
  {
    title: "프로젝트 이름 3",
    description: "이 프로젝트에 대한 간단한 설명을 작성하세요.",
    tags: ["Python"],
  },
];

export const skills: Skill[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export const contact = {
  email: "uzuz.hwang@gmail.com",
  github: "https://github.com/your-id",
  linkedin: "https://linkedin.com/in/your-id",
} as const;
