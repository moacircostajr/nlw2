import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

interface Props {

}

const TeacherItem = (props: Props) => {
  return (
    <>
      <article className="teacher-item">
        <header>
          <img src="https://avatars.githubusercontent.com/u/47369269?s=60&u=8643e984e2d728257eef8d1424e4012b30bfcc86&v=4" alt="Moacir Costa" />
          <div>
            <strong>Moacir Costa</strong>
            <span>Física</span>
          </div>
        </header>
        <p>
          Texto teste aegalke ia spsa is y
            <br /><br />
            Aaskdjh fasdf asdfy sapdify pasd fysaidfyusa oidyf asu fsdyf isadufy iosadyf iosau
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
    </>
  )
}

export default TeacherItem
