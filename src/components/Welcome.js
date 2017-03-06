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
        <div className="white-block">
          <p className="body-text">Thanks for inviting me to your office!</p>
          <p className="body-text"> I was so excited that I built this site over the weekend.</p>
        </div>
      </div>
    </div>
  )
}
