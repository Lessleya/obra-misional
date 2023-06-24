import React from 'react'
import jesus from '../../assets/jesus.png'
import '../../App.scss';
import Quotes from '../../components/quotes/Quotes';

import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="App">
     <header className='navbar'>
     <h1 className='welcome'> Obra Misional Barrio YSA Riverton</h1>
     <Quotes/>
     <Link to="/home">
            <button className='ayudar-button'>Ayudar Ahora</button>
        </Link>
     </header>
     <div className='hero'>
    
      <img src={jesus}></img>
     
      
     </div>
    </div>
  )
}
