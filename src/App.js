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
  }

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
                <a className="pagination__link" href="#0">
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

      <main className="">
        <section
          id="about"
          className="row-box background-color-smoky-white"
        >
          <div className="inner about">
            <h3 className="about__title">Обо мне</h3>
            <p className="about__text">
              Привет, я Денис – Frontend разработчик из Балаково. <br />
              <br /> Я интересуюсь веб разработкой, и всем что с этим связанно.{" "}
              <br />
              <br /> Я закончил курсы "Веб-разработки" в Нетология. <br />
              <br /> Готов реализовывать отличные проекты с замечательными
              людьми.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
