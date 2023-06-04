import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            {/* <span>SIGUENOS</span> */}
            {/* <div className="mail">
                <input type="text" placeholder='Ingresa tu mensaje...' />
                <button>ENVIAR</button>
            </div> */}
            <div className="icons">
                <a target='blank' href="https://www.facebook.com/volleytip"><FacebookIcon/></a>
                <a target='blank' href="https://www.instagram.com/volleytip/"><InstagramIcon/></a>
                <a target='blank' href="https://www.youtube.com/@volleytip"><YouTubeIcon/></a>
                <a target='blank' href="https://www.tiktok.com/@volleytip?lang=es"><img className='tiktok' src="img/Logos/tiktok-512.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact