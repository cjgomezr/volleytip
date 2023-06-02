import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide]=useState(0)
    const data=[
        "img/Slider/4.jpg",
        "img/Slider/1.jpg",
        "img/Slider/3.jpg",
    ];

    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0? 2:(prev) => prev-1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide===2? 0:(prev) => prev+1)
    }

    return (
        <div className='slider'>

                <span className='text'>EN EQUIPO</span>
                <span className='text2'>SOMOS MÁS FUERTES</span>
                <span className='text3'>
                    <a target='blank' href="https://www.youtube.com/watch?v=QIGl4SVXqbM">Reproducir</a>
                </span>


            <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider