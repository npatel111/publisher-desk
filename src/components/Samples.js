import React from 'react'
import BackgroundImage from './BackgroundImage'
var Codepen = require('react-codepen')

export default function Samples(props) {
  return (
    <div>
      <BackgroundImage link="/bee3.jpg"/>
      <p className="title">Samples</p>
      <div className="white-block">
        <p className="body-text">I played around with CSS3 this weekend, here are some Codepen samples!</p>
        <div className="codepen">
          <p>A groundhog that hides when you hover over it:</p>
          <Codepen user="npatel111" width="40em" theme="light" tab="result" height="30em" hash="ryMBxy" ></Codepen>
          <p>A radial gradient to be the background for a hypnotoad:</p>
          <Codepen user="npatel111" width="40em" theme="light" tab="result" height="30em" hash="MpjgPv" ></Codepen>
        </div>
      </div>
    </div>
  )
}
