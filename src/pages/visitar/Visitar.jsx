import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Visitar2 from '../../assets/visitar2.png'
import Info from '../../components/info/Info'
import { Link } from 'react-router-dom'

export default function Visitar() {
  return (
    <div>
    <Header backgroundColor="var(--secondary-blue)"></Header>
    <Banner imageUrl={Visitar2} textBanner="Visitar con los Misioneros"></Banner>
    <Info thanks="Gracias por ofrecerte avisitar con los misioneros" instructions="Porfavor introduce tus datos en la siguiente forma y los misioneros se contactaran contigo"></Info>
  

  <div className="buttons">
  <button className="primary-button"> <a href="https://docs.google.com/forms/d/e/1FAIpQLScHJ4kYfcAHvgIPGMThZ73oDeizP5LFfe-iXldK0F2P49fxbQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="external-link-button">Enviar formulario</a></button>
  <button className='secondary-button' ><Link to="/home">Regresar</Link></button>
 
  </div>
    </div>
  )
}
