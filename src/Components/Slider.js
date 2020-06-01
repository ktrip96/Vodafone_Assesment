import React from "react"

export default function Slider(props) {
  const {title,subtitle} = props.data

  return (
    <div className="box slide">
      <h1>{title}</h1>
      <p style={{marginBottom:"60px"}}>{subtitle}</p>
      <button className="dots active" />
      <button className="dots" />
      <button className="dots" />
    </div>
  )
}
