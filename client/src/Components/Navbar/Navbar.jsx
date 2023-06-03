import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link, useLocation} from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const[open,setOpen]= useState(false)
  const products = useSelector((state) => state.cart.products);
  
  


  return (
    <div className= 'navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="item">
            <Link className='link' to="/">
            <img className='logo' src="../../../public/img/Logos/Logo.png" alt="" />
            </Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1"></Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2"></Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3"></Link>
          </div>
        </div>

        <div className='center'>
          <Link className='link' to="/"></Link> 
        </div>

        <div className='right'>
          <div className="item">
            <Link className='link' to="/"></Link>
          </div>
          <div className="item">
            <Link className='link' to="/"></Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Tienda</Link>
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