import { ToastOptions } from "react-toastify";

export const skills: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Bootstrap",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Vite.js",
  "Postman API & Docs",
  "OpenAI GPT 3.5 Turbo API",
];

export const languages: { lan: string; lev: string }[] = [
  { lan: "Turkish", lev: "Native" },
  { lan: "English", lev: "Professional" },
  { lan: "German", lev: "Beginner" },
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
  EN: "../../public/assets/CVs/M_Yasir_Ozdemir_CV_EN.pdf",
};
