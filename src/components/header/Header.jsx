import React from 'react'
import '../header/header.scss'

export default function Header({backgroundColor}) {
    const headerStyle = {
        backgroundColor: backgroundColor || 'transparent'
      };
  return (
    <div>
         <header style={headerStyle} className='main-navbar'>
            <h1 className='header-riverton'>YSA Riverton</h1>
   </header>
    </div>
  )
}
