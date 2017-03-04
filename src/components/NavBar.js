import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'


export default function NavBar(props) {
  return (
    <div className="App-header">
      <h2><Link to={"/"}>WELCOME</Link></h2>
      <h2><Link to={"/publishers"}>PUBLISHERS</Link></h2>
      <h1>N I T I    P A T E L</h1>
      <h2><Link to={"/careers"}>CAREERS</Link></h2>
      <h2><Link to={"/contact"}>CONTACT</Link></h2>
    </div>
  )
}
