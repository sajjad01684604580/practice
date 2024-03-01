import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <div className={`${className} font-bold text-6xl text-blue-500`}>{text}</div>
  )
}

export default Paragraph