import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Jcomida from '../../assets/comida2.png';
import Header from '../../components/header/Header';
import Info from '../../components/info/Info';

import '../comida/comida.scss';

export default function Comida() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (
      selectedValue === 'Riverton' ||
      selectedValue === 'Draper' ||
      selectedValue === 'Bluffdale' ||
      selectedValue === 'Herriman' ||
      selectedValue === 'SouthJordan'
    ) {
      window.location.href = '/comida/hermanas';
    } else if (
      selectedValue === 'WestJordan' ||
      selectedValue === 'Sandy' ||
      selectedValue === 'Kearns' ||
      selectedValue === 'WestValley' ||
      selectedValue === 'Oquirrh'
    ) {
      window.location.href = '/comida/elderes';
    }
  };

  return (
    <div>
      <Header backgroundColor="var(--pink)" />
      <Banner imageUrl={Jcomida} textBanner="Comida para los Misioneros" />
      <Info
        thanks="Gracias por ofrecerte a dar de comer a los misioneros"
        instructions="¿En cuál de estas áreas vives?"
      ></Info>
      <div className="comida-container">
      <div className="dropdown-container">
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value="">Selecciona un área</option>
          <option value="Riverton">Riverton</option>
          <option value="Draper">Draper</option>
          <option value="Bluffdale">Bluffdale</option>
          <option value="Herriman">Herriman</option>
          <option value="SouthJordan">South Jordan</option>
          <option value="WestJordan">West Jordan</option>
          <option value="Sandy">Sandy</option>
          <option value="Kearns">Kearns</option>
          <option value="WestValley">West Valley</option>
          <option value="Oquirrh">Oquirrh</option>
        </select>
        </div>
        </div>

      <div className="buttons">
        <button onClick={handleNextButtonClick}>Siguiente</button>
        
          <button className='secondary-button'><Link to="/home">Regresar</Link></button>
        
      </div>
    </div>
  );
}
