import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="top">
        {/* <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
        </div> */}
        <div className="item">
          <h1>Links</h1>
          <Link className='link' to="/products/1">Tienda</Link>
          {/* <span>Stores</span> */}
        </div>
        <div className="item">
          <h1>Sobre Nosotros</h1>
          <span>Queremos impactar el voleibol, desarrollando y solidificando este deporte, para que así logre transformar la sociedad de manera positiva.</span>
        </div>
        <div className="item">
        <h1>Contacto</h1>
          <span>volleytip@volleytip.com</span>
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