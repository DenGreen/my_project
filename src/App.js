import './App.scss'

function App() {
  return (
  <header className='row-box'>
    <div className="inner">
    <nav className="pagination-box">
      <ul className="pagination">
        <li className="pagination__item pagination__item_active"><a href="#0">Главная</a></li>
        <li className="pagination__item"><a href="#0">Обо мне</a></li>
        <li className="pagination__item"><a href="#0">Навыки</a></li>
        <li className="pagination__item"><a href="#0">Портфолио</a></li>
        <li className="pagination__item"><a href="#0">Контакты</a></li> 
      </ul>
    </nav>

    <section className="header-content">
      <h1 className="header-content__logo">Денис Малышев</h1>
      <h2 className="header-content__slogan">Frontend Developer 28 лет, Балаково</h2>
      <img src="#0" alt="Малышев Денис" className="header-content__img" />
    </section>
    </div>
  </header>
  )
}

export default App;
