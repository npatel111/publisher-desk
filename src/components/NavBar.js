import React  from 'react'
import {  Link} from 'react-router'


export default function NavBar(props) {
  return (
    <div className="eqi-container">
      <p><Link to={"/"}>WELCOME</Link></p>
      <p><Link to={"/samples"}>SAMPLES</Link></p>
      <div id="name-container"><Link to={"/"}><p id="name">NITI PATEL</p></Link></div>
      <p><Link to={"/careers"}>CAREERS</Link></p>
      <p><Link to={"/contact"}>CONTACT</Link></p>
    </div>
  )
}
