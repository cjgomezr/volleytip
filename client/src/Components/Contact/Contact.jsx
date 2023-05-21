import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact