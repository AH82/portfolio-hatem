import React from 'react'

export default function LogoMsg(props) {
const {
  message1, 
  message2, 
  message3 
} = props;

  return (
    <>
      {message1 && 
      <div 
      className='logo-msg logo-msg-1' 
      >{message1}</div>}
      {message2 && 
      <div className='logo-msg logo-msg-2'>{message2}</div>}
      {message3 && 
      <div className='logo-msg logo-msg-3'>{message3}</div>}
    </>
  )
}
