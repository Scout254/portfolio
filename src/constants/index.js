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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "working with Apis and databases eg mongodb to save and retrieve information.",
      "using react redux toolkit to manange state in my applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using react context api to overcome prop drilling.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "working with Apis and databases eg mongodb to save and retrieve information.",
      "using react redux toolkit to manange state in my applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using react context api to overcome prop drilling.",
    ],
  },
  {
    title: "Web Developer",
    
    
    
    
    points: [
      "working with Apis and databases eg mongodb to save and retrieve information.",
      "using react redux toolkit to manange state in my applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using react context api to overcome prop drilling.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "Ecommerce",
    description:
      "Web-based platform that allows users to search, purchase, products .",
  
    image: shop,
    source_code_link: "https://github.com/",
  },
  {
    name: "React Native Shopping App",
    description:
      "An ecommerce application in react native.",
   
    image: mobileui,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movies App",
    description:
      "A movie trailer app where you can play trailer movies.",
   
    image: cinema,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
