import React from 'react'
import BackgroundImage from './BackgroundImage'

export default function Contact(props) {
  return (
    <div>
      <BackgroundImage link="/contact.jpg"/>
      <p className="title">Contact Me</p>
      <p className="body-header"><strong>Get in touch</strong></p>
      <p className="body-text">Feel free to email me at nitimaheshpatel@gmail.com with any questions or comments</p>
    </div>
  )
}
