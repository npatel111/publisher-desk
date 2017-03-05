import React  from 'react'
import {  Link} from 'react-router'


export default function NavBar(props) {
  return (
    <div className="eqi-container">
      <p><Link to={"/"}>WELCOME</Link></p>
      <p><Link to={"/publishers"}>PUBLISHERS</Link></p>
      <p>NITI PATEL</p>
      <p><Link to={"/careers"}>CAREERS</Link></p>
      <p><Link to={"/contact"}>CONTACT</Link></p>
    </div>
  )
}
