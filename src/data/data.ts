import { ICollectionPages, ICollectionSkills, ICollectionPortfolio, ICollectionSocialLink } from "../models";
import { nanoid } from "nanoid";

export const collectionPages: ICollectionPages[] = [
  { text: "Главная", href: "header", id: nanoid() },
  { text: "Обо мне", href: "about", id: nanoid() },
  { text: "Навыки", href: "skills", id: nanoid() },
  { text: "Портфолио", href: "portfolio", id: nanoid() },
  { text: "Контакты", href: "contacts", id: nanoid() },
];

export const collectionSkills: ICollectionSkills[] = [
  {
    img: "html5.svg",
    name: "HTML",
    id: nanoid(),
  },
  {
    img: "css3.svg",
    name: "CSS",
    id: nanoid(),
  },
  {
    img: "javascript.svg",
    name: "JavaScript",
    id: nanoid(),
  },
  {
    img: "ts.svg",
    name: "TypeScript",
    id: nanoid(),
  },
  {
    img: "logo-react.svg",
    name: "React",
    id: nanoid(),
  },
  {
    img: "react-router.svg",
    name: "React-Router",
    id: nanoid(),
  },
  {
    img: "jest.svg",
    name: "Jest",
    id: nanoid(),
  },
  {
    img: "webpack.svg",
    name: "Webpack",
    id: nanoid(),
  },
  {
    img: "sass.svg",
    name: "SASS/SCSS",
    id: nanoid(),
  },
  {
    img: "npm.svg",
    name: "NPM",
    id: nanoid(),
  },
  {
    img: "git.svg",
    name: "GIT",
    id: nanoid(),
  },
  {
    img: "github.svg",
    name: "GitHub",
    id: nanoid(),
  },
  {
    img: "appveyor.svg",
    name: "Appveyor",
    id: nanoid(),
  },
  {
    img: "figma.svg",
    name: "Figma",
    id: nanoid(),
  },
];

export const collectionPortfolio: ICollectionPortfolio[] = [
  {
    img: "Surface.webp",
    text: "Surface-landing page",
    link: "https://dengreen.github.io/adaptiv/",
    id: nanoid(),
  },
  {
    img: "MoneyManager.webp",
    text: " Money Manager - приложение для управления финансами",
    link: "https://bhjiploma.herokuapp.com/",
    id: nanoid(),
  },
  {
    img: "chat.webp",
    text: "Chat - мини чат созданный с использованием WebSocket",
    link: "https://dengreen.github.io/ahj_websockets_front/",
    id: nanoid(),
  },
  {
    img: "minitask.webp",
    text: "Карточки корма для котов - небольшая работа на React",
    link: "https://dengreen.github.io/QualificationTasks/",
    id: nanoid(),
  },
  {
    img: "game.webp",
    text: "Retro Game - двухмерная игра в стиле фэнтези написанная на JS",
    link: "https://dengreen.github.io/diplomfull/",
    id: nanoid(),
  },
];

export const collectionSocialLink: ICollectionSocialLink[] = [
  {
    img: "GitHub.svg",
    title: "GitHub",
    link: "https://github.com/DenGreen",
    id: nanoid(),
  },
  {
    img: "Skype.svg",
    title: "Skype",
    link: "https://join.skype.com/invite/oWIrdYvVX9IR",
    id: nanoid(),
  },
  {
    img: "Telegram.svg",
    title: "Telegram",
    link: "https://t.me/DanGreenBl",
    id: nanoid(),
  },
  {
    img: "WhatsApp.svg",
    title: "WhatsApp",
    link: "https://wa.me/79991802665",
    id: nanoid(),
  },
];
