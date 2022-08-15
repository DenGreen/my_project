import { ICollectionPages } from "../../models";
import Nav from "./Nav/Nav";
import "./header.scss";

interface Iprops {
  props: ICollectionPages[];
}

function HeaderPage({ props }: Iprops) {
  const collectionPages = props;

  return (
    <>
      <header className="row-box header-box" id="header">
        <section className="header">
          <Nav props={collectionPages} />

          <div className="header__header-content">
            <div
              className="header__box-title"
              data-aos="fade-down-right"
              data-aos-duration="1500"
            >
              <h1 className="header__logo">Denis Malyshev</h1>
              <h2 className="header__slogan">
                Frontend Developer 28 лет, Балаково
              </h2>
            </div>
            <img
              data-aos="fade-down-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="header__img"
              srcSet="./img/header800x800.webp 1x, ./img/header.webp 2x"
              alt="Картинка"
            ></img>
          </div>
        </section>
      </header>
    </>
  );
}

export default HeaderPage;
