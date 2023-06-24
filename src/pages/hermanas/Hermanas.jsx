import React from 'react'
import Hermanas2 from '../../assets/hermanas.png'
import Header from '../../components/header/Header'
import '../../pages/hermanas/hermanas.scss'
import { Link } from 'react-router-dom'

export default function Hermanas() {
  return (
    <div >
        <div className='elderes-container'>
        <Header backgroundColor="var(--pink)"></Header>
        <h2 className='title'>Tu area pertences a: </h2>
        <img src={Hermanas2} alt="hermanas" />
        <h1 className='elderes-name'>Hermana Medina y Hermana Ayala </h1>
        <p>(801) 833-8834</p>

        <p className='instructions'>Por favor toma en cuenta que si eres hombre y quieres darles de comer a las misioneras, una mujer debe estar presente en la comida o debes de darles de comer en un lugar publico.</p>
        </div>


  <div className="buttons">
  <button> <a href="https://calendly.com/comidamisioneros/comida-para-las-misioneras" target="_blank" rel="noopener noreferrer" className="external-link-button">
      Agendar Comida
    </a></button>
  <button className='secondary-button' ><Link to="/comida">Regresar</Link></button>
  </div>
    </div>
  )
}
