import React from 'react'
import PageHeader from '../../components/PageHeader'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherList = () => {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars.githubusercontent.com/u/47369269?s=60&u=8643e984e2d728257eef8d1424e4012b30bfcc86&v=4" alt="Moacir Costa" />
            <div>
              <strong>Moacir Costa</strong>
              <span>Física</span>
            </div>
          </header>
          <p>
            Texto teste texto teste texto teste texto teste texto teste texto teste texto
            Texto teste texto teste texto teste texto teste texto teste texto teste texto
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>

    </div>
  )
}

export default TeacherList
