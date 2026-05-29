const dummySkills: SkillRecord[] = [
  {
    id: "skill_01",
    title: "Write Code",
    slug: "write-code",
    description: "Generates high-quality TypeScript and React code based on structural prompts.",
    category: "Development",
    tags: ["typescript", "react", "coding"],
    installCommand: "npm i @skills/write-code",
    createdAt: "2026-05-20T12:00:00Z",
    authorClerkId: "user_23489234",
    authorEmail: "patryk@careyes.pl"
  },
  {
    id: "skill_02",
    title: "Execute Shell Command",
    slug: "execute-shell",
    description: "Safely runs system commands inside a secure, sandboxed container environment.",
    category: "DevOps",
    tags: ["terminal", "bash", "automation"],
    installCommand: "npm i @skills/execute-shell",
    createdAt: "2026-05-22T14:30:00Z",
    authorClerkId: "user_98123123",
    authorEmail: "dev-ops@agency.io"
  },
  {
    id: "skill_03",
    title: "Fetch Web Content",
    slug: "fetch-web",
    description: "Scrapes and parses structured data from any public URL or API endpoint.",
    category: "Data",
    tags: ["scraping", "api", "fetch"],
    installCommand: "npm i @skills/fetch-web",
    createdAt: "2026-05-24T09:15:00Z",
    authorClerkId: "user_45676543",
    authorEmail: "data-extractor@skills.net"
  },
  {
    id: "skill_04",
    title: "Optimize Images",
    slug: "optimize-images",
    description: "Compresses and converts layout assets to modern web formats like WebP or AVIF.",
    category: "Design",
    tags: ["images", "assets", "optimization"],
    installCommand: "npm i @skills/optimize-images",
    createdAt: null,
    authorClerkId: null,
    authorEmail: null
  },
  {
    id: "skill_05",
    title: "Generate Database Schema",
    slug: "generate-schema",
    description: "Outputs Prisma or PostgreSQL database schemas from plain text definitions.",
    category: "Backend",
    tags: ["database", "prisma", "sql"],
    installCommand: "npm i @skills/generate-schema",
    createdAt: "2026-05-25T15:40:00Z",
    authorClerkId: "user_77788899",
    authorEmail: "backend-master@workspace.org"
  }
];

export {dummySkills}