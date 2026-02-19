import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>

         <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        
        <div className='footer_top'>
          <span className='footer_logo'>NETFLIX</span>
        </div>

        <div className='footer_links_container'>
          <div className='footer_links_column'>
            <a href='#'>Audio Description</a>
            <a href='#'>Investor Relations</a>
            <a href='#'>Legal Notice</a>
          </div>
          
          <div className='footer_links_column'>
            <a href='#'>Help Center</a>
            <a href='#'>Jobs</a>
            <a href='#'>Cookie Preferences</a>
          </div>
          
          <div className='footer_links_column'>
            <a href='#'>Gift Cards</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Corporate Information</a>
          </div>
          
          <div className='footer_links_column'>
            <a href='#'>Media Center</a>
            <a href='#'>Privacy</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>

        <div className='footer_bottom'>
          <button className='footer_service_btn'>Service Code</button>
          <p className='footer_copyright'>© 1997-2024 Netflix, Inc.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer