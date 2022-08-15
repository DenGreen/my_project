import "./App.scss";
import BtnUp from "./Components/BtnUp/BtnUp";
import ContactUs from "./Components/FormForSendingMessages/ContactUs";
import HeaderPage from "./pages/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import {collectionPages, collectionPortfolio, collectionSkills, collectionSocialLink} from "./data/data"

AOS.init();

function App() {
  const addScills = () => {
    return (
      <section id="skills" className="row-box section-skills">
        <h3 className="section-skills__title">Навыки</h3>
        <p className="section-skills__text">В своей работе, я использую</p>
        <div className="section-skills__wrap inner">
          {collectionSkills.map((value) => {
            return (
              <div
                className="section-skills__box-skills"
                data-aos="zoom-in"
                data-aos-duration="1500"
                key={value.id}
              >
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
              <div
                className="section-portfolio__project"
                key={value.id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
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

  const addSocialLink = () => {
    return (
      <div className="footer__box">
        {collectionSocialLink.map((value) => {
          return (
            <a
              href={`${value.link}`}
              className="footer__social-linck"
              target="_blank"
              rel="noreferrer noopener"
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
              момент нахожусь в поисках работы. <br />
              <br />
              Мои главные качества - это жажда знаний и решимость. <br />
              Моя цель - стать профисионалом своего дела.
              <br />
              <br />С нетерпением жду ваши предложения!
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
          {addSocialLink()}
        </div>
      </footer>
    </>
  );
}

export default App;
