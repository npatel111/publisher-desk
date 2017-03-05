import React from 'react'

export default function BackgroundImage(props) {
  // debugger
  // const divStyle={
  //   backgroundImage: `url(${props.link})`
  // }
  const pic = `${props.link}`
  return (
    <div className="big" >
      <img src={pic} alt="" />
    </div>
  )
}
