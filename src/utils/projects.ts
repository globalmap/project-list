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
    date: "2025-04-05",
    status: "archived",
    technologies: ["Three.js", "JavaScript", "CSS"],
    client: "Stone Labs",
    category: "Product Configurator",
    tags: ["3D", "eCommerce", "WebGL"],
    teamSize: 4,
    duration: "3 weeks",
    isFeatured: true,
  },
  {
    id: 1,
    title: "Gallery",
    slug: "gallery",
    descriptions: "[Demo] Photo Gallery",
    imgSrc: "/projects/gallery.png",
    date: "2023-05-20",
    status: "archived",
    technologies: ["React", "TypeScript", "CSS", "SCSS"],
    client: "Me",
    category: "Demo",
    tags: ["demo", "antd"],
    teamSize: 1,
    duration: "1 day",
    repo: "https://github.com/globalmap/gallery",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Sofa Cofigurator",
    slug: "living-spaces",
    descriptions: "Sofa Cofigurator for living spaces",
    imgSrc: "/projects/living-spaces.png",
    link: "https://www.livingspaces.com/pdp-soma-foam-125-inch-2-piece-sectional-with-left-arm-facing-sofa-303369?mcid=MC25736",
    date: "2022-01-25",
    status: "archived",
    technologies: ["WebGL", "React", "Javascript", "SCSS"],
    client: "Living Spaces",
    category: "Product Configurator",
    tags: ["eCommerce", "3D", "WebGL"],
    teamSize: 4,
    duration: "6 month",
    isFeatured: false,
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
    imgSrc: "/projects/yourpricebooking.png",
    link: "https://www.yourpricebooking.com/",
    date: "2024-03-05",
    status: "archived",
    technologies: ["React", "TypeScript", "Next.js"],
    client: "YourPriceBooking",
    category: "Booking",
    tags: ["eCommerce", "Localizations"],
    teamSize: 3,
    duration: "8 month",
    isFeatured: false,
  },
];
