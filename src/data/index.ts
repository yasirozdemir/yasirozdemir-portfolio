import { ToastOptions } from "react-toastify";

interface ISkill {
  text: string;
  bg: string;
}

export const hardSkills: ISkill[] = [
  { text: "HTML", bg: "#E54B20" },
  { text: "CSS", bg: "#0B73B7" },
  { text: "Javascript", bg: "#D0B237" },
  { text: "Typescript", bg: "#2E78C7" },
  { text: "React", bg: "#61D9FB" },
  { text: "Redux", bg: "#764ABC" },
  { text: "Bootstrap", bg: "#5B4282" },
  { text: "Tailwind", bg: "#37BCF8" },
  { text: "Node.js", bg: "#61B347" },
  { text: "Express.js", bg: "#323232" },
  { text: "MongoDB", bg: "#55AD48" },
  { text: "PostgreSQL", bg: "#3A6C94" },
  { text: "Vite.js", bg: "#FFCC31" },
  { text: "Postman API & Docs", bg: "#FF7040" },
  { text: "OpenAI GPT 3.5 Turbo API", bg: "#20A683" },
];

export const softSkills = [
  "Teamwork",
  "Leadership",
  "Networking",
  "Adaptability",
  "Communication",
  "Time Management",
  "Problem-Solving",
  "Cultural Awareness",
  "Presentation Skills",
];

export const languages: { lan: string; level: string }[] = [
  { lan: "Turkish", level: "Native" },
  { lan: "English", level: "Professional" },
  { lan: "German", level: "Beginner" },
];

export const projects: {
  title: string;
  summary: string;
  github_link: string;
  img_src: string;
}[] = [
  {
    title: "What ai Movie",
    summary:
      "What ai Movie is a web app that users can search for movies depending on their feeling, thoughts or desires.",
    github_link: "https://github.com/yasirozdemir/capstone-project-fe",
    img_src:
      "https://res.cloudinary.com/yasirdev/image/upload/v1684784752/portfolio/projects/11_wzqban.png",
  },
  {
    title: "LinkedIn Clone",
    summary:
      "A clone that users can play music, have a look at the albums and artist.",
    github_link: "https://github.com/yasirozdemir/u3-bw-linkedin",
    img_src:
      "https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/linkedin_pexq2v.jpg",
  },
  {
    title: "Spotify Clone",
    summary:
      "A clone that users can play music, have a look at the albums and artist.",
    github_link: "https://github.com/pappkartoni/U2-BW-Deezify",
    img_src:
      "https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/spotify_fd2uks.jpg",
  },
  {
    title: "Epicode Benchmark",
    summary:
      "Epicode's benchmark webpage. It's basically a quiz app with 10 questions, a timer, and a result page.",
    github_link: "https://github.com/Flovedev/U1-W4-BuildWeek",
    img_src:
      "https://res.cloudinary.com/yasirdev/image/upload/v1684745973/portfolio/projects/epicode_rio1gr.jpg",
  },
];

export const alertOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const footerLinkData: { url: string }[] = [
  { url: "https://www.linkedin.com/in/yasirozdemir" },
  { url: "https://www.github.com/yasirozdemir" },
  { url: "https://www.instagram.com/yasirunofficial_" },
  { url: "https://www.youtube.com/@MuhammedYasirOzdemir" },
  { url: "https://www.medium.com/@muhammedyasirozdemir" },
];

export const CV_URLs = {
  EN: "/assets/CVs/M_Yasir_Ozdemir_CV_EN.pdf",
};
