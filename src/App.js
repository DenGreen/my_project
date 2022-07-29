import { useRef } from "react";
import "./App.scss";
import BtnUp from "./Components/BtnUp/BtnUp";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  const checked = useRef(null);

  const onClickGoToElement = (event) => {
    event.preventDefault();

    const navLink = event.target;
    const blockID = navLink.getAttribute("href").slice(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onClickCheckboxChecked = () => {
    checked.current.checked = false;
  };

  const OnClickListLink = (event) => {
    onClickGoToElement(event);
    onClickCheckboxChecked();
  };

  return (
    <>
      <BtnUp />
      <section className="row-box header-box">
        <header className="inner header">
          <nav className="pagination-box">
            <input className="checkbox" ref={checked} type="checkbox" />
            <div className="hamburger">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="pagination pagination__transform">
              <li className="pagination__item">
                <a
                  className="pagination__link"
                  href="#0"
                  onChange={OnClickListLink}
                >
                  Главная
                </a>
              </li>
              <li className="pagination__item">
                <a
                  className="pagination__link"
                  href="#about"
                  onClick={OnClickListLink}
                >
                  Обо мне
                </a>
              </li>
              <li className="pagination__item">
                <a
                  className="pagination__link"
                  href="#skills"
                  onClick={OnClickListLink}
                >
                  Навыки
                </a>
              </li>
              <li className="pagination__item">
                <a
                  className="pagination__link"
                  href="#portfolio"
                  onClick={OnClickListLink}
                >
                  Портфолио
                </a>
              </li>
              <li className="pagination__item">
                <a
                  className="pagination__link"
                  href="#contacts"
                  onClick={OnClickListLink}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-content">
            <h1 className="header-content__logo">Denis Malyshev</h1>
            <h2 className="header-content__slogan">
              Frontend Developer 28 лет, Балаково
            </h2>
            <img
              src="./img/header.webp"
              alt="Малышев Денис"
              className="header-content__img"
            />
          </div>
        </header>
      </section>

      <main className="main">
        <section id="about" className="row-box background-color-smoky-white">
          <div className="inner about">
            <h3 className="section__title">Обо мне</h3>
            <p className="section__text">
              Привет, я Денис – Frontend разработчик из Балаково. <br />
              <br /> Я интересуюсь веб разработкой, и всем что с этим связанно.{" "}
              <br />
              <br /> Я закончил курсы "Веб-разработки" в Нетология. <br />
              <br /> Готов реализовывать отличные проекты с замечательными
              людьми.
            </p>
          </div>
        </section>

        <section id="skills" className="row-box section-skills">
          <h3 className="section-skills__title">Навыки</h3>
          <p className="section-skills__text">В своей работе, я использую</p>
          <div className="section-skills__wrap inner">
            <div className="section-skills__box-skills">
              <img
                src="./img/html5.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">HTML5</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/css3.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">CSS3</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/javascript.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">JavaScript</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/nodejs.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Node.js</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/logo-react.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">React</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/react-router.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">React-Router</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/jest.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Jest</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/webpack.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Webpack</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/sass.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Sass/Scss</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/npm.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">npm</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/git.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">GIT</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/github.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">GitHub</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/appveyor.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Appveyor</span>
            </div>
            <div className="section-skills__box-skills">
              <img
                src="./img/figma.svg"
                className="section-skills__logo"
                alt=""
              />
              <span className="section-skills__desc">Figma</span>
            </div>
          </div>
          <span className="section-background"></span>
        </section>

        <section
          id="portfolio"
          className="row-box section-portfolio background-color-smoky-white"
        >
          <h3 className="section-portfolio__title">Портфолио</h3>
          <div className="section-portfolio__wrap inner">
            <div className="section-portfolio__project">
              <img
                src="./img/Portfolio/Surface.webp"
                alt=""
                className="section-portfolio__img"
              />
              <p className="section-portfolio__desc">
                Surface-landing page
                <a
                  href="https://dengreen.github.io/adaptiv/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="section-portfolio__link"
                >
                  Перейти
                </a>
              </p>
            </div>
            <div className="section-portfolio__project">
              <img
                src="./img/Portfolio/MoneyManager.webp"
                alt=""
                className="section-portfolio__img"
              />
              <p className="section-portfolio__desc">
                Money Manager - приложение для управления финансами
                <a
                  href="https://bhjiploma.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="section-portfolio__link"
                >
                  Перейти
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer id="contacts" className="footer row-box">
        <div className="footer__wrap inner">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__text">
            Хотите узнать больше или просто поболтать? Добро пожаловать!
          </p>
          <ContactUs />
          <div className="footer__box">
            <a href="#0" className="footer__social-link">
              <img
                src="./img/social_img/GitHub.svg"
                className="footer__social-ico"
                alt=""
                title="GitHub"
              />
            </a>
            <a href="#0" className="footer__social-link">
              <img
                src="./img/social_img/Skype.svg"
                className="footer__social-ico"
                alt=""
                title="Skype"
              />
            </a>
            <a href="#0" className="footer__social-link">
              <img
                src="./img/social_img/Telegram.svg"
                className="footer__social-ico"
                alt=""
                title="Telegram"
              />
            </a>
            <a href="#0" className="footer__social-link">
              <img
                src="./img/social_img/VK.svg"
                className="footer__social-ico"
                alt=""
                title="VK"
              />
            </a>
            <a href="#0" className="footer__social-linck">
              <img
                src="./img/social_img/WhatsApp.svg"
                className="footer__social-ico"
                alt=""
                title="WhatsApp"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
