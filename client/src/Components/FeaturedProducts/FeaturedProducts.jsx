import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"

export const FeaturedProducts = ({type}) => {

    const data =[
        {
            id:1,
            img:"../../../public/img/Products/Prd1-1.png",
            img2:"../../../public/img/Products/Prd2-1.png",
            title:"Quick Ball",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"../../../public/img/Products/Prd3-1.png",
            img2:"../../../public/img/Products/Prd4-1.png",
            title:"Volleytip Sweater",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"../../../public/img/Products/Prd2-1.png",
            img2:"../../../public/img/Products/Prd1-1.png",
            title:"Inclined Plane",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"../../../public/img/Products/Prd1-4.png",
            img2:"../../../public/img/Products/Prd1-5.png",
            title:"Volleytip Thermo",
            isNew:true,
            oldPrice:19,
            price:12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nostrum incidunt, aspernatur commodi nihil sit quo perspiciatis at voluptates dicta tempore molestiae minima, consequatur facilis hic ab dolore! Hic, sequi!</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
