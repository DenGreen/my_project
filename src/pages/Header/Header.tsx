import React, { useRef } from "react";
import { ICollectionPages } from "../../models";
import "./header.scss";

interface Iprops {
  props: ICollectionPages[];
}

function HeaderPage({ props }: Iprops) {
  const checkedStatusInput = useRef<HTMLInputElement>(null);

  const onClickGoToElement = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const navLink = event.target as HTMLLinkElement;
    const blockID = navLink.getAttribute("href")!.slice(1);

    document.getElementById(blockID)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onClickCheckboxChecked = () => {
    checkedStatusInput.current!.checked = false;
  };

  const OnClickListLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClickGoToElement(event);
    onClickCheckboxChecked();
  };

  const addPagination = () => {
    return (
      <ul className="pagination pagination__transform">
        {props.map((value) => {
          return (
            <li className="pagination__item" key={value.id}>
              <a
                className="pagination__link"
                href={"#" + value.href}
                onClick={OnClickListLink}
              >
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <section className="row-box header-box" id="main">
        <header className="inner header">
          <nav className="pagination-box">
            <input className="checkbox" ref={checkedStatusInput} type="checkbox" />
            <div className="hamburger">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            {addPagination()}
          </nav>

          <div className="header-content">
            <div className="header-content__box-title">
              <h1 className="header-content__logo">Denis Malyshev</h1>
              <h2 className="header-content__slogan">
                Frontend Developer 28 лет, Балаково
              </h2>
            </div>
            <img
              className="header-content__img"
              srcSet="./img/header800x800.webp 1x, ./img/header.webp 2x"
              alt="Картинка"
            ></img>
          </div>
        </header>
      </section>
    </>
  );
}

export default HeaderPage;
