import React from 'react'
import '../banner/banner.scss'

export default function Banner({imageUrl, textBanner}) {
  return (
    <div>
        <img className='banner' src={imageUrl} alt="banner" />
        <p className='banner-text'>{textBanner}</p>
    </div>
  )
}
