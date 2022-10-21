import React from 'react'
import PartialApply from '../hoc/PartialApply'

const Button = ({ text, children, className, click, type, ...props }) => {
  const TYPE = {
    red: "btn-red",
    orange: "btn-orange",
    blue: "btn-blue"
  }

  return (
    <button className={`${TYPE[type]} ${className}`} onClick={click} {...props}>
      <span>{text || children}</span>
      <div></div>
    </button>
  )
}

export const RedButton = PartialApply(Button, { type: "red" })
export const OrangeButton = PartialApply(Button, { type: "orange" })
export const BlueButton = PartialApply(Button, { type: "blue" })