import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cinema,
  mobileui,
  shop,
} from "../assets";



const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
 
];




const projects = [
  {
    name: "Ecommerce",
    description:
      "Web-based platform that allows users to search, purchase, products .",
  
    image: shop,
    source_code_link: "https://github.com/Scout254/ecommerce_app",
    web_url:"https://ecommerce-app-git-master-scout254.vercel.app/"
  },
  {
    name: "React Native Shopping App",
    description:
      "An ecommerce application in react native.",
   
    image: mobileui,
    source_code_link: "https://github.com/Scout254/shopping_app",
    web_url:""
  },
  {
    name: "Movies App",
    description:
      "A movie trailer app where you can play trailer movies.",
   
    image: cinema,
    source_code_link: "https://github.com/Scout254/netflix_clone",
    web_url:"https://netflix-clone-neon-beta.vercel.app/"
  },
];

export { services, technologies, projects };
