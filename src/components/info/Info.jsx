import React from 'react'
import Icon from '../../assets/Location Pin.png'
import '../../components/info/info.scss'

export default function Info({thanks, instructions}) {
  return (
    <div className='info'>

        <h2>{thanks}</h2>
        <img src={Icon} alt="Location Pin" />
        <p>{instructions}</p>
        

    </div>
  )
}
