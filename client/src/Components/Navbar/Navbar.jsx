import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const[open,setOpen]= useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="item">
            <Link className='link' to="/">
            <img className='logo' src="../../../public/img/Logos/Logo.png" alt="" />
            </Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Children</Link>
          </div>
        </div>

        <div className='center'>
          <Link className='link' to="/"></Link> 
        </div>

        <div className='right'>
          <div className="item">
            <Link className='link' to="/">Inicio</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contacto</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Tienda</Link>
          </div>
          <div className="icons">
            
            <div className="carIcon" onClick={(e)=>setOpen(!open)}>
              <ShoppingCartIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar