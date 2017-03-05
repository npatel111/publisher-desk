import React from 'react'
import BackgroundImage from './BackgroundImage'

export default function Careers(props) {
  return (
    <div>
      <div id="unique-pic careers"><BackgroundImage link="/careers.jpg"/></div>
      <p className="title">Experience</p>
      <div className="job-text">
        <p className="job">Account Manager</p>
        <p className="job-body-text">Location: New York, United States</p>
        <hr />
        <p className="job">Account Coordinator</p>
        <p className="job-body-text">Location: New York, United States</p>
        <hr />
        <p className="job">Sales Planner</p>
        <p className="job-body-text" >Location: New York, United States</p>
        <hr />
        <p className="job">Sales Strategist</p>
        <p className="job-body-text">Location: Texas, United States</p>
      </div>
    </div>
  )
}
