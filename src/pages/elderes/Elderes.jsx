import React from 'react'
import Elder from '../../assets/elderes.png'
import Header from '../../components/header/Header'
import '../../pages/elderes/elderes.scss'
import { Link } from 'react-router-dom'

export default function Elderes() {
  return (
    <div >
        <div className='elderes-container'>
        <Header backgroundColor="var(--primary-color-blue)"></Header>
        <h2 className='title'>Tu area pertences a: </h2>
        <img src={Elder} alt="elderes" />
        <h1 className='elderes-name'>Elder Alasia y Elder Cueva </h1>
        <p>(385) 296-8627</p>

        <p className='instructions'>Por favor toma en cuenta que si eres mujer y quieres darles de comer a los misioneros un hombre debe estar presente en la comida o debes de darles de comer en un lugar publico.</p>
        </div>


  <div className="buttons">
<button> <a href="https://calendly.com/comidamisioneros/comida-elderes" target="_blank" rel="noopener noreferrer" className="external-link-button">
      Agendar Comida
    </a></button>
<button className='secondary-button'><Link to="/comida">Regresar</Link></button>
  </div>
    </div>
  )
}
