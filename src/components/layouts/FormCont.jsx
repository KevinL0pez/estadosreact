import React from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

export const FormCont = () => {

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_gyntyek', 'template_rx1fnl9', event.target, 'xKiwiMZj3gElqFPW7')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className="div-form">
      <h1 className="title-form">Contact Us</h1>
      <form action="" className="form-email" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <hr />

        <label>Email</label>
        <input type="email" name="user_email"/>
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}
