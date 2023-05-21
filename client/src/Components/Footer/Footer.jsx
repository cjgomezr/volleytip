import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>Sobre Nosotros</h1>
          <span>Desde volleytip queremos impactar el voleibol, desarrollando y solidificando este deporte,para que así se convierta en una herramienta que logre transformar la sociedad a través del tiempo de manera positiva.</span>
        </div>
        <div className="item">
        <h1>Contacto</h1>
          <span>hablemos@volleytip.com</span>
        </div>
      </div>
      <div className="bottom">
          <div className="left">
            <span className='logo'>VOLLEYTIP</span>
            <span className="copyright">Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer