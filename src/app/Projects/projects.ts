export interface Project {

  title: string;
  liveLink: string;
  imageSrc: string;
  imageAlt: string;
  githubLink: string;
  description: string;
  docs?:string;
}

export const projects:Project[] = [
  {
    title: "00 Website Paths",
    liveLink: "https://00-website-paths.vercel.app/",
    imageSrc: "/project1.png",
    imageAlt: "Screenshot of 00 Website Paths project",
    githubLink: "https://github.com/M-fatimaZohra/00_website_paths.git",
    description: "Created About, Contact Us, and Service pages with nested routing using Next.js Link tag.",
  },
  {
    title: "01 Home Component",
    liveLink: "https://01-homepage-component.vercel.app/",
    imageSrc: "/project2.png",
    imageAlt: "Screenshot of 01 Home Component project",
    githubLink: "https://github.com/M-fatimaZohra/01_homepage_component",
    description: "Built a homepage with Header, Footer, and Hero components, styled with custom CSS.",
  },
  {
    title: "02 Homepage Tailwind CSS",
    liveLink: "https://02-homepage-with-tailwind.vercel.app/",
    imageSrc: "/project3.png",
    imageAlt: "Screenshot of 02 Tailwind project",
    githubLink: "https://github.com/M-fatimaZohra/02_homepage_with_tailwind",
    description: "Developed a minimal landing page with Tailwind CSS, including header, footer, and sections.",
  },
  {
    title: "UI/UX Figma Design",
    liveLink: "https://01-food-truck.vercel.app/",
    imageSrc: "/project4.png",
    imageAlt: "Screenshot of  Food website UI/UX based on figma design",
    githubLink: "https://github.com/M-fatimaZohra/01_food_truck.git",
    description: "Food website UI/UX based on figma design.",
  },
  {
    title: "Q-Commerce Food Website - Food Tuck",
    liveLink: "https://food-truck-ruddy.vercel.app/",
    imageSrc: "/project5.png",
    imageAlt: "Screenshot of  Q-Commerce Food Website - Food Tuck",
    githubLink: "https://github.com/M-fatimaZohra/food_truck",
    description: "A Q-commerce food website that allows users to browse and order food and enjoy the friendly services.",
    docs:"https://github.com/M-fatimaZohra/Documents.git"
  },
  {
    title: "Dwell Days",
    liveLink: "https://blog-website-eight-ebon.vercel.app/",
    imageSrc: "/project6.png",
    imageAlt: "BLog website with sanity.io",
    githubLink: "https://github.com/M-fatimaZohra/blog-website.git",
    description: "blog website where you can read blogs, here I use sanity.io for the backend.",
  },
  {
    title: "Figma Design with 2 responsives",
    liveLink: "https://05-figma-design-02.vercel.app/",
    imageSrc: "/project7.png",
    imageAlt: "Figma design 01",
    githubLink: "https://github.com/M-fatimaZohra/05_figma_design_02",
    description: "It has ony 2 responsives one for the desktop screen and second is for mobile screen. The website should be responsive on both of the screens including the tablet screen",
  },
  {
    title: "Hannah cosmetics catalog UI",
    liveLink: "https://cosmetics-basic-website.vercel.app/",
    imageSrc: "/project8.png",
    imageAlt: "Hannah cosmetics catalog UI",
    githubLink: "https://github.com/M-fatimaZohra/cosmetics-basic-website",
    description: "Hannah, a mock cosmetics company, this is catalog UI for website",
  },
  {
    title: "Assignment: CSR/SSR",
    liveLink: "https://06-csr-ssr.vercel.app/",
    imageSrc: "/project9.png",
    imageAlt: "CSR/SSR",
    githubLink: "https://github.com/M-fatimaZohra/06_csr_ssr.git",
    description: "Assignment: CSR/SSR, here I use Next.js for the server-side rendering and client-side rendering.",
  },
  {
    title: "Resume Builder",
    liveLink: "https://05finalworkofresume.vercel.app/",
    imageSrc: "/project10.png",
    imageAlt: "One of my frist projects that i build with html css and TypeScript",
    githubLink: "https://github.com/M-fatimaZohra/00_Resume-Builder",
    description: "Hannah, a mock cosmetics company, this is catalog UI for website",
  },
];
