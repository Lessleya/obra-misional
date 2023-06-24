import React from 'react';
import Hermanar2 from '../../assets/hermanar2.png';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Info from '../../components/info/Info';
import { Link } from 'react-router-dom';

export default function Hermanar() {
  return (
    <div>
      <Header backgroundColor="var(--green)" />
      <Banner imageUrl={Hermanar2} textBanner="Hermanar a Amigos en Enseñanza" />
      <Info
        thanks="Gracias por ofrecerte a hermanar a uno de nuestros amigos en enseñanza"
        instructions="Por favor introduce tus datos en la siguiente forma y los misioneros se contactarán contigo"
      />
      
      <div className="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScDyWGOJobD63-eJ4oHiJkaetV4ZXwh5ycfJrBAITi7olperg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="external-link-button">
          <button className="primary-button">Enviar formulario</button>
        </a>
        <button className="secondary-button"><Link to="/home">Regresar</Link></button>
      </div>
    </div>
  );
}
