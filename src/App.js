import { useRef } from "react";
import "./App.scss";
import BtnUp from "./Components/BtnUp/BtnUp";

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
      <header className="row-box">
        <div className="inner header">
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
                <a className="pagination__link" href="#0">
                  Портфолио
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#0">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <section className="header-content">
            <h1 className="header-content__logo">Denis Malyshev</h1>
            <h2 className="header-content__slogan">
              Frontend Developer 28 лет, Балаково
            </h2>
            <img
              src="./img/header.jpg"
              alt="Малышев Денис"
              className="header-content__img"
            />
          </section>
        </div>
      </header>

      <main>
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
          <p className="section-skills__text">
            Я работаю в таких программах, как
          </p>
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
        </section>
      </main>
    </>
  );
}

export default App;
