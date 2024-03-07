import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact">
        <h1 className='heading1'>Think Health. Think Message</h1>
        <p className='para1'>We are open 9am to 6pm: Monday through Sunday. If you would like to schedule an appointment <br/>with us, please call us at 987-654-3210 today!</p>
        <div className='btn-container'>
        <button id="btn1">LEARN MORE ABOUT US</button>
        <button id="btn2">CONTACT US TODAY</button>
        </div>
    </div>
  )
}

export default Contact;
