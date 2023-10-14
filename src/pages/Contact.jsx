import React from 'react'
import contactBg from "../assets/contact-bg.svg"
import Accordion from '../components/Accordion'

const Contact = () => {
  return (
    <div>
    <section className='pagebackground'>
        <img src={contactBg} alt="" />
      </section>
      <main className='mainContent'>
      <section>
        <h2>Have a question?</h2>
        <p className='processText'>Check out compiled answers to some of the most commonly asked questions about our services, capabilities, and more. </p>
        <div>
        <Accordion />
        </div>
      </section>
      <section>
        <h2>Stay in touch</h2>
        <p className='processText'>We value your connection with us. Whether you have a question, need assistance, or simply want to say hello, staying in touch is easy Send us a message.</p>
        <div className="contact-form">
        <form action="">
          <input type="text" placeholder='Your name'/>
          <input type="text" placeholder='Your email-address'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message'/>
          <button>Send Message</button>
        </form>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Contact