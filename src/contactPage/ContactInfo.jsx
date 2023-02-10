import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (

    <div className="main-cont">
      <div className="contact-us-image" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`
  }}>
      </div>

      <div className="contact-bg">
        <div className="contact-us-cont">
          <header className="contact-header">
            <h1>Contact Us</h1>
          </header>
          <div className="contact-input-cont">
            <div className="contact-input">
              <form action="/kontakt">
                <div className="ime-prezime">
                  <input type="text" name="ime" id="ime" placeholder="Ime" required />
                  <input type="text" name="ime" id="prezime" placeholder='Prezime' required /> <br />
                </div>
                <div className="mail-telefon">
                  <input type="email" name="email" id="email" placeholder='Email' required />
                  <input type="number" name="broj-telefona" id="broj-telefona" placeholder="Broj telefona" required /> <br />
                </div>
                <div className="text-area">
                  <textarea name="text" id="text-area" cols="30" rows="7" placeholder='Unesite text'></textarea>
                </div>
                <button type="submit" className='contact-btn'>Submit</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="info">
              <div className="icon-cont">
                <FontAwesomeIcon icon={faPhone} className='contact-icon' />
              </div>
              <div className="info-cont">
                <h3>Phone</h3>
                <p>060/0000 000</p>
                <p>060/0000 000</p>
              </div>
            </div>


            <div className="info">
              <div className="icon-cont">
                <FontAwesomeIcon icon={faLocationPin} className='contact-icon' />
              </div>
              <div className="info-cont">
                 <h3>Location</h3>
                 <a target="_blank"
                rel="noreferrer"
                 href='https://www.google.com/maps/place/Avala/@44.6891661,20.5161111,15z/data=!3m1!4b1!4m5!3m4!1s0x475a744502dcb445:0x40063e1e57f24ff!8m2!3d44.6891667!4d20.5161111!5m1!1e4'>
                <p>Belgrade</p>
                <p>Lorem ipsum 15</p>
                </a>
              </div>
            </div>

            <div className="info">
              <div className="icon-cont">
                <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
              </div>
              <div className="info-cont">
                <h3>EMAIL</h3>
                <div className='info-mail' onClick={(e) => {window.location.href ='mailto:example@gmail.com';}}>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="info">
              <div className="icon-cont">
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
              </div>
              <div className="info-cont">
                <h3>Working Hours</h3>
                
                <p>Monday - Friday</p>
                <p>08h - 16h</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo