import React from 'react'
import BackgroundImage from './BackgroundImage'

export default function Experience(props) {
  return (
    <div>
      <BackgroundImage link="/ny.jpg"/>
      <p className="title">Experience</p>
      <div className="white-block">
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
