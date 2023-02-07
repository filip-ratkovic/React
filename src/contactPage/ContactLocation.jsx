import React from 'react'
import './contact.css'

function ContactLocation() {
    return (
        <div className="lokacija-container">
            <header className="kontakt-header">
                <h1>Pronadjite nas na Google mapama</h1>
                <a target="_blank"
                rel="noreferrer"
                 href='https://www.google.com/maps/place/Avala/@44.6891661,20.5161111,15z/data=!3m1!4b1!4m5!3m4!1s0x475a744502dcb445:0x40063e1e57f24ff!8m2!3d44.6891667!4d20.5161111!5m1!1e4'>
                    Belgrade 11000, lorem ipsum 14</a>
            </header>
            <section className="lokacija-section">
                <iframe
                title='Lokacija magacina'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11345.965469668628!2d20.5161111!3d44.68916615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a744502dcb445%3A0x40063e1e57f24ff!2sAvala!5e0!3m2!1sen!2srs!4v1675807217053!5m2!1sen!2srs"
                    style={{
                        width: "70%",
                        height: "450px",
                        style: "border:0;",
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade",
                        border: "none"
                    }}

                ></iframe>
            </section>
        </div>
    )
}

export default ContactLocation

