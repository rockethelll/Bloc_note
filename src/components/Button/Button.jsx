/* eslint-disable react/prop-types */
import React from "react"

const Button = (props) => {
  return <input type="submit" value={props.value} className={'btn ' + props.className} />
}

export default Button
