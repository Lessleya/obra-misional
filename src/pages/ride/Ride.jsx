import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Ride2 from '../../assets/jesus_at_the_door 1.png'
import Info from '../../components/info/Info'
import { Link } from 'react-router-dom'
export default function Ride() {
  return (
    <div>
    <Header backgroundColor="var(--yellow)"></Header>
    <Banner imageUrl={Ride2} textBanner="Ride para los Amigos en Ensenanza"></Banner>
    <Info thanks="Gracias por ofrecerte a darle ride a uno de nestros amigos en ensenanza" instructions="Porfavor introduce tus datos en la siguiente forma y los misioneros se contactaran contigo"></Info>
  

  <div className="buttons">
 
          <button className="primary-button"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSHP8AWA6_izN0VkMCZTc9h_Ta2BQ1YdLfHe1PQmY1aufDFg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="external-link-button">Enviar formulario</a></button>
        
  <button className='secondary-button' ><Link to="/home">Regresar</Link></button>
  </div>
    </div>
  )
}
