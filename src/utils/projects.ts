export type ProjectStatus = 'archived' | 'inProgress' | 'active';

export interface Project {
  id: number;
  title: string;
  slug: string;
  descriptions: string;
  imgSrc: string;
  link: string;
  date: string;
  status: ProjectStatus;
  technologies: string[];
  client: string;
  category: string;
  tags: string[];
  teamSize: number;
  duration?: string;
  isFeatured: boolean;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Table Configurator",
    slug: "table-configurator",
    descriptions: "Table configurator for stone labs",
    imgSrc: "https://globalmap.github.io/project-list/projects/stone-labs.png",
    link: "https://stone-lab.nl/product/configurator",
    date: "2025-04-05",
    status: "archived",
    technologies: ["Three.js", "JavaScript", "CSS"],
    client: "Stone Labs",
    category: "Product Configurator",
    tags: ["3D", "eCommerce", "WebGL"],
    teamSize: 4,
    duration: "3 weeks",
    isFeatured: false,           
  },
  {
    id: 1,
    title: "Gallery",
    slug: "gallery",
    descriptions: "[Demo] Photo Gallery",
    imgSrc: "https://globalmap.github.io/project-list/projects/gallery.png",
    link: "https://globalmap.github.io/gallery/",
    date: "2023-05-20",
    status: "inProgress",
    technologies: ["React", "TypeScript", "CSS", "SCSS"],
    client: "Me",
    category: "Demo",
    tags: ["demo", "antd"],
    teamSize: 1,
    repo: "https://github.com/globalmap/gallery",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Sofa Cofigurator",
    slug: "living-spaces",
    descriptions: "Sofa Cofigurator for living spaces",
    imgSrc: "https://globalmap.github.io/project-list/projects/living-spaces.png",
    link: "https://www.livingspaces.com/pdp-soma-foam-125-inch-2-piece-sectional-with-left-arm-facing-sofa-303369?mcid=MC25736",
    date: "2022-01-25",
    status: "archived",
    technologies: ["WebGL", "React", "Javascript", "SCSS"],
    client: "Living Spaces",
    category: "Product Configurator",
    tags: ["eCommerce", "3D", "WebGL"],
    teamSize: 4,
    duration: "6 month",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Rings Builder",
    slug: "booking-service",
    descriptions: "Rings Builder for Anna Sheffield",
    imgSrc: "https://www.elementalsweb.com/pages/portfolio/rings.png",
    link: "https://www.annasheffield.com/pages/the-ring-stacker",
    date: "2021-08-20",
    status: "archived",
    technologies: ["React", "JavaScript"],
    client: "Anna Sheffield",
    category: "Product Configurator",
    tags: ["3D", "eCommerce", "WebGL"],
    teamSize: 2,
    duration: "3 month",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Booking Service",
    slug: "booking-service",
    descriptions: "Booking Service for YourPriceBooking",
    imgSrc: "https://globalmap.github.io/project-list/projects/yourpricebooking.png",
    link: "https://www.yourpricebooking.com/",
    date: "2024-03-05",
    status: "archived",
    technologies: ["React", "TypeScript", "Next.js"],
    client: "YourPriceBooking",
    category: "Booking",
    tags: ["eCommerce", "Localizations"],
    teamSize: 3,
    duration: "8 month",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Markdown Editor",
    slug: "markdown-editor",
    descriptions: "Markdown Editor [ALPHA]",
    imgSrc: "https://globalmap.github.io/project-list/projects/markdown-editor.png",
    link: "https://globalmap.github.io/markdown-editor/",
    date: "2024-07-05",
    status: "archived",
    technologies: ["React", "TypeScript"],
    client: "Me",
    category: "Demo",
    tags: ["demo", "antd", "markdown"],
    teamSize: 1,
    duration: "1 week",
    isFeatured: false,
  },
  {
  id: 6,
  title: "Space Explorer Dashboard",
  slug: "space-explorer",
  descriptions: "Real-time space data visualization using NASA and SpaceX APIs",
  imgSrc: "https://globalmap.github.io/project-list/projects/space-explorer.png",
  link: "https://globalmap.github.io/space-explorer/",
  date: "2024-09-10",
  status: "archived",
  technologies: ["React", "TypeScript", "D3.js", "REST API"],
  client: "Me",
  category: "Data Visualization",
  tags: ["API", "demo", "data-viz", "astronomy"],
  teamSize: 1,
  duration: "2 days",
  repo: "https://github.com/globalmap/space-explorer",
  isFeatured: true,
}
];