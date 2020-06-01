import React from "react"
import { FaSearch } from "react-icons/fa"

export default function Slider(props) {
  const { title, subtitle } = props.data

  return (
    <div className="box slide">
      <div className="Navbar">
        <div className="seperate">
          <h5>Home</h5>
          <button
            className={`dots section-dots nav-active`}
            style={{height: "10px", width: "10px" }}
            id="dot-2"
          ></button>
        </div>
        

        <h5 style={{ marginLeft: "20px", marginRight: "400px" }}>Page 2</h5>
        <FaSearch style={{ marginLeft: "20px" }} />
      </div>
      <h1>{title}</h1>
      <p style={{ marginBottom: "40px" }}>{subtitle}</p>
      <button className="dots active" />
      <button className="dots" />
      <button className="dots" />
    </div>
  )
}
