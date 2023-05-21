import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data=[
        {
            id:1,
            img:"/img/Products/Prd1-1.png",
            img2:"/img/Products/Prd2-1.png",
            title:"Quick Ball",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:"Something"
        },
        {
            id:2,
            img:"/img/Products/Prd3-1.png",
            img2:"/img/Products/Prd4-1.png",
            title:"Volleytip Sweater",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:"Something"
        },
    ]


    return (
        <div className='cart'>
            <h1>Productos en tu carro</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0,100)}</p>
                        <div className="price">1* {item.price}</div>
                    </div>
                    <DeleteOutlineIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart