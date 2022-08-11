import "./App.scss";
import BtnUp from "./Components/BtnUp/BtnUp";
import ContactUs from "./Components/FormForSendingMessages/ContactUs";
import { nanoid } from "nanoid";
import HeaderPage from "./pages/Header/Header";
import { ICollectionPages } from "./models";

const collectionPages: ICollectionPages[] = [
  { text: "Главная", href: "main", id: nanoid() },
  { text: "Обо мне", href: "about", id: nanoid() },
  { text: "Навыки", href: "skills", id: nanoid() },
  { text: "Портфолио", href: "portfolio", id: nanoid() },
  { text: "Контакты", href: "contacts", id: nanoid() },
];

const collectionSkills = [
  { img: "html5.svg", name: "HTML", id: nanoid() },
  { img: "css3.svg", name: "CSS", id: nanoid() },
  { img: "javascript.svg", name: "JavaScript", id: nanoid() },
  { img: "ts.svg", name: "TypeScript", id: nanoid() },
  { img: "logo-react.svg", name: "React", id: nanoid() },
  { img: "react-router.svg", name: "React-Router", id: nanoid() },
  { img: "jest.svg", name: "Jest", id: nanoid() },
  { img: "webpack.svg", name: "Webpack", id: nanoid() },
  { img: "sass.svg", name: "SASS/SCSS", id: nanoid() },
  { img: "npm.svg", name: "NPM", id: nanoid() },
  { img: "git.svg", name: "GIT", id: nanoid() },
  { img: "github.svg", name: "GitHub", id: nanoid() },
  { img: "appveyor.svg", name: "Appveyor", id: nanoid() },
  { img: "figma.svg", name: "Figma", id: nanoid() },
];

const collectionPortfolio = [
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
    text: "Retro Game - двухмерная игра в стиле фэнтези нарисанная на JS",
    link: "https://dengreen.github.io/diplomfull/",
    id: nanoid(),
  },
];

const collectionSocialLink = [
  { img: "GitHub.svg", title: "GitHub", link: "0", id: nanoid() },
  { img: "Skype.svg", title: "Skype", link: "0", id: nanoid() },
  { img: "Telegram.svg", title: "Telegram", link: "0", id: nanoid() },
  { img: "VK.svg", title: "VK", link: "0", id: nanoid() },
  { img: "WhatsApp.svg", title: "WhatsApp", link: "0", id: nanoid() },
];

function App() {
  const addScills = () => {
    return (
      <section id="skills" className="row-box section-skills">
        <h3 className="section-skills__title">Навыки</h3>
        <p className="section-skills__text">В своей работе, я использую</p>
        <div className="section-skills__wrap inner">
          {collectionSkills.map((value) => {
            return (
              <div className="section-skills__box-skills" key={value.id}>
                <img
                  src={`./img/${value.img}`}
                  className="section-skills__logo"
                  alt=""
                />
                <span className="section-skills__desc">{value.name}</span>
              </div>
            );
          })}
        </div>
        <span className="section-background"></span>
      </section>
    );
  };

  const addPortfolio = () => {
    return (
      <section
        id="portfolio"
        className="row-box section-portfolio background-color-smoky-white"
      >
        <h3 className="section-portfolio__title">Портфолио</h3>
        <div className="section-portfolio__wrap inner">
          {collectionPortfolio.map((value) => {
            return (
              <div className="section-portfolio__project" key={value.id}>
                <img
                  src={`./img/Portfolio/${value.img}`}
                  alt=""
                  className="section-portfolio__img"
                />
                <p className="section-portfolio__desc">
                  {value.text}
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="section-portfolio__link"
                  >
                    Перейти
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const addSicialLink = () => {
    return (
      <div className="footer__box">
        {collectionSocialLink.map((value) => {
          return (
            <a
              href={`#${value.link}`}
              className="footer__social-linck"
              key={value.id}
            >
              <img
                src={`./img/social_img/${value.img}`}
                className="footer__social-ico"
                alt=""
                title={value.title}
              />
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <BtnUp />
      <HeaderPage props={collectionPages} />
      <main className="main">
        <section id="about" className="row-box background-color-smoky-white">
          <div className="inner about">
            <h3 className="section__title">Обо мне</h3>
            <p className="section__text">
              Привет, я Денис – Frontend разработчик из Балаково. Интересуюсь
              веб разработкой, мне нравится создавать продукт которым пользуются
              люди. Я закончил курсы "Веб-разработки" в Нетология и в данный
              момент нахожусь в поисках работы. <br/><br/>Мои главные качества - это жажда
              знаний и решимость. <br/>Моя цель - стать профисионалом своего дела.<br/>
              <br/>С нетерпением жду ваши предложения!
            </p>
          </div>
        </section>

        {addScills()}
        {addPortfolio()}
      </main>
      <footer id="contacts" className="footer row-box">
        <div className="footer__wrap inner">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__text">
            Буду рад расмотреть вашы предложения и ответить на вопросы.
            <br /> Связаться со мной можно через форму обратной связи, в
            месенджерах и по e-mail.
          </p>
          <ContactUs />
          {addSicialLink()}
        </div>
      </footer>
    </>
  );
}

export default App;
