import React from "react";
import { ICollectionPortfolio } from "../../../models";
import "./Portfolio.scss"

interface Iprops {
  props: ICollectionPortfolio[];
}

function Portfolio({ props }: Iprops) {
  const collectionPortfolio = props;
  return (
    <section
      id="portfolio"
      className="row-box portfolio"
    >
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__wrap">
        {collectionPortfolio.map((value) => {
          return (
            <div
              className="portfolio__project"
              key={value.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500"
            >
              <img
                src={`./img/Portfolio/${value.img}`}
                alt=""
                className="portfolio__img"
              />
              <p className="portfolio__desc">
                {value.text}
                <a
                  href={value.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="portfolio__link"
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
}

export default Portfolio;
