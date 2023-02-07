import React from 'react'
import ContactInfo from './ContactInfo'
import ContactLocation from './ContactLocation'
import './contact.css'


function Contact() {
  return (
    <main className="contact-main">
       <ContactInfo/>
       <ContactLocation/>
    </main>
  )
}

export default Contact