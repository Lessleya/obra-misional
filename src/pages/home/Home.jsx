
import '../home/home.scss';
import Header from '../../components/header/Header';
import Comida from '../../assets/comida.png';
import Visita from '../../assets/visitar.png';
import Ride from '../../assets/ride.png';
import Hermanar from '../../assets/hermanar.png'
import { Link } from 'react-router-dom';
import Info from '../../components/info/Info';

const menuItems=[
    {
      "text": "Comida para los Misioneros",
      "imageSrc": Comida,
      "altText": "comida",
      "link":"/comida"
    },
    {
      "text": "Visitar con los misioneros",
      "imageSrc": Visita,
      "altText": "visitar",
      "link":"/visitar"
    },
    {
      "text": "Ride para los Amigos en Ensenanza",
      "imageSrc":  Ride,
      "altText": "ride",
      "link":"/ride"
    },
    {
      "text": "Hermanar Amigos en Ensenanza",
      "imageSrc": Hermanar,
      "altText": "hermanar",
      "link":"/hermanar"
    }
  ]

export default function 
() {
  return (
    <div className="App">
    <Header backgroundColor="var(--primary-color-blue)"></Header>

   <h2 className='title2'>¿Como te gustaría ayudar en la obra misional?</h2>

   <div className='menu'>
   {menuItems.map((menuItem, index) => (
        <div className='menu-item' key={index}>
            <Link to={menuItem.link}>
          <p className='menu-text'>{menuItem.text}</p>
          <img className='menu-img' src={menuItem.imageSrc} alt={menuItem.altText} />
          </Link>
        </div>
      ))}

   </div>

   </div>
  )
}
