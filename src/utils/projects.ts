export interface Project {
  id: number;
  title: string;
  slug?: string;
  descriptions: string;
  imgSrc: string;
  link?: string;
  date?: string;
  status?: "active" | "archived" | "inProgress";
  technologies?: string[];
  client?: string;
  category?: string;
  tags?: string[];
  teamSize?: number;
  duration?: string;
  repo?: string;
  isFeatured?: boolean;
  videoDemoUrl?: string;
  testimonials?: {
    name: string;
    quote: string;
  }[];
}
export const projects: Project[] = [
  {
    id: 0,
    title: "Table Configurator",
    slug: "table-configurator",
    descriptions: "Table configurator for stone labs",
    imgSrc: "/projects/stone-labs.png",
    link: "https://stone-lab.nl/product/configurator",
    date: "2024-01-10",
    status: "active",
    technologies: ["React", "Three.js", "TypeScript", "Next.js"],
    client: "Stone Labs",
    category: "Product Configurator",
    tags: ["3D", "eCommerce", "WebGL"],
    teamSize: 4,
    duration: "2 months",
    repo: "https://github.com/stonelabs/table-configurator",
    isFeatured: true,
    videoDemoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    testimonials: [
      {
        name: "Andriy K.",
        quote: "Це був один з найкращих проектів, з якими ми працювали!",
      },
    ],
  },
  {
    id: 1,
    title: "Fintech Dashboard",
    slug: "fintech-dashboard",
    descriptions: "Internal dashboard for tracking transactions and KPIs.",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    date: "2023-11-05",
    status: "archived",
    technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    client: "FinBank",
    category: "Dashboard",
    tags: ["finance", "charts", "admin"],
    teamSize: 6,
    duration: "3 months",
    repo: "https://github.com/finbank/dashboard",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Portfolio Website",
    slug: "portfolio-website",
    descriptions: "Personal portfolio with blog and contact section.",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    date: "2024-03-21",
    status: "active",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Personal",
    tags: ["portfolio", "developer", "blog"],
    teamSize: 1,
    duration: "2 weeks",
    isFeatured: true,
  },
  {
    id: 3,
    title: "E-learning Platform MVP",
    slug: "elearning-platform",
    descriptions: "A minimal viable product for online course platform.",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    date: "2023-09-01",
    status: "inProgress",
    technologies: ["Vue", "Firebase", "TypeScript"],
    client: "Edutech Group",
    category: "Education",
    tags: ["learning", "platform", "vue"],
    teamSize: 5,
    duration: "4 months",
    isFeatured: false,
    testimonials: [
      {
        name: "Olena R.",
        quote: "Команда швидко зібрала MVP. Дуже задоволені результатом!",
      },
    ],
  },
];
