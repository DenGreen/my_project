import React from "react";
import {ICollectionSkills} from "../../../models"
import "./Skills.scss"

interface Iprops {
    props: ICollectionSkills[];
}

function Skills({props}: Iprops) {
  const collectionSkills = props;
  return (
    <section id="skills" className="row-box skills">
      <h3 className="skills__title">Навыки</h3>
      <p className="skills__text">В своей работе, я использую</p>
      <div className="skills__wrap">
        {collectionSkills.map((value) => {
          return (
            <div
              className="skills__box-skills"
              data-aos="zoom-in"
              data-aos-duration="1500"
              key={value.id}
            >
              <img
                src={`./img/${value.img}`}
                className="skills__logo"
                alt=""
              />
              <span className="skills__desc">{value.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
