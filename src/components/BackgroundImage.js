import React from 'react'

export default function BackgroundImage(props) {
  const pic = `${props.link}`
  return (
    <div className="big" >
      <img src={pic} alt="" />
    </div>
  )
}
