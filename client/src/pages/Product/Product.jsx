import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)

  const images =[
    "/img/Products/Siluetas/Prd1-2.png",
    "/img/Products/Siluetas/Prd2-2.png",
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=> setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e)=> setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className='price'>$200</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta repellendus laborum dignissimos quod consequatur exercitationem est esse, doloribus non iusto magni nesciunt, facere itaque rem, perferendis dolore unde! Dolor?</p>
        <div className="quantity">
          <button onClick={(e)=> setQuantity((prev)=>prev===1? 1:prev-1)}>-</button>
          {quantity}
          <button onClick={(e)=> setQuantity((prev)=>prev+1)}>+</button>
        </div>

        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>

          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product