import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="head d-padding container">
            <h2>Current Region/Language</h2>
            <div className="lang">
                <i className="bi bi-globe"></i>
                <p> International /English</p>
                <a href="">Change</a>
            </div>
           <div className="locandsocial">
             <div className="location">
                <h2>Location & Contacts</h2>
                <p>Do u have any Questions</p>
                <button>Get in Touch</button>
            </div>
            <div className="social-media">
                <h2>Social-Media</h2>
                     <p>Get in touch with via social media</p>
               <div className="social-medias">
            
                <button><i className="bi bi-facebook"></i></button>
                <button><i className="bi bi-whatsapp"></i></button>
                <button><i className="bi bi-linkedin"></i></button>
                <button><i className="bi bi-instagram"></i></button>
                <button><i className="bi bi-youtube"></i></button>
               </div>
           
            </div>
           </div>
            <div className="company">
                <h2>Company</h2>
                <div className="company-contents">
                    <a href="">Investor Relations</a>
                    <a href="">Compliance</a>
                    <a href="">Career</a>
                    <a href="">Newsroom & Press</a>

                    <a href="">Global Partnership Council</a>
                   
                </div>
            </div>


      
        </div>
    </section>
  )
}

export default Footer