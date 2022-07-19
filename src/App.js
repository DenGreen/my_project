import "./App.scss";

function App() {
  return (
    <>
      <header className="row-box">
        <div className="inner header">
          <nav className="pagination-box">
            <input className="checkbox" type="checkbox" />
            <div className="hamburger">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="pagination">
              <li className="pagination__item">
                <a
                  className="pagination__link pagination__link-active"
                  href="#0"
                >
                  Главная
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#0">
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
        <section className="row-box row-box_backgroundColor_smokyWhite">
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
