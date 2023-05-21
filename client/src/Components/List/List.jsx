import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {
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
        <div className='list'>{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
        </div>
    )
}

export default List