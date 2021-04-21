import React from "react"

export const Button = ({ text, ...restProps }) => {
  return (
    <button className="Button" {...restProps}>{text}</button>
  )
}