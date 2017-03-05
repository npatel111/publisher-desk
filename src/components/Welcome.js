import React from 'react'
import BackgroundImage from './BackgroundImage'
import {  Link} from 'react-router'
import NavBar from './NavBar'


export default function Welcome(props) {

  return (
    <div>
      <div >
        <BackgroundImage link="/welcome.gif"/>
        <p className="title">Welcome</p>
        <p className="body-text">Thanks for inviting me to your office! I was so excited that I built a small site to showcase, what I can do for you.</p>
      </div>
    </div>
  )
}
