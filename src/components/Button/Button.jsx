/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

const Button = (props) => {
  return (
    <button
      type="submit"
      className={"btn " + props.className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

export default Button
