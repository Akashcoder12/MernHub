import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
       <div className='footer'>
         <p id="footer-text"><strong>MERNHub</strong> &copy; {new Date().getFullYear()} | Empowering Devs & Recruiters</p>
         <p id="footer-link">
            <a href="#" rel="linkedin">Linkedin</a>
            <a href="#" rel="gitHub">GitHub</a>
            <a href="#" rel="contact">Contact</a>
         </p>
       </div>
    </footer>
  )
}
