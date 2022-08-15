import React from 'react'
import "./About.scss"

function About() {
  return (
    <section id="about" className="row-box about-box">
        <div className="about">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__text">
            Привет, я Денис – Frontend разработчик из Балаково. Интересуюсь веб
            разработкой, мне нравится создавать продукт которым пользуются люди.
            Я закончил курсы "Веб-разработки" в Нетология и в данный момент
            нахожусь в поисках работы. <br />
            <br />
            Мои главные качества - это жажда знаний и решимость. <br />
            Моя цель - стать профисионалом своего дела.
            <br />
            <br />С нетерпением жду ваши предложения!
          </p>
        </div>
      </section>
  )
}

export default About