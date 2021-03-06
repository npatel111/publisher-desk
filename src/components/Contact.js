import React from 'react'
import BackgroundImage from './BackgroundImage'

export default function Contact(props) {
  return (
    <div>
      <BackgroundImage link="/dark.png"/>
      <p className="title">Contact Me</p>
      <div className="white-block">
        <p className="body-header" id="bigger-text">Get in touch</p>
        <p className="body-text">nitimaheshpatel@gmail.com </p>
      </div>
    </div>
  )
}
