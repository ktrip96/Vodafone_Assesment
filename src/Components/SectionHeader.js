import React from "react"

export default function SectionHeader({ swap,state,title }) {
  return (
    <div className="box section">
      <h2 className="center" >{title}</h2>
      <div className="bottom-right">
        <div className="seperate">
          <p onClick={() => swap(1)} className="section-titles" style={state===2?{color:'#748494'}:{}}>Section 1</p>
          <button 
            className={`dots section-dots ${state===1&&'active'}`}
            style={state===1?{borderColor:"white",height:'12px',width:'12px'}:{}}
            id="dot-1"
          ></button>
        </div>
        <div className="seperate">
          <p onClick={() => swap(2)} className="section-titles" style={state===1?{color:'#748494'}:{}} > Section 2</p>
          <button
            className={`dots section-dots ${state===2&&'active'}`}
            style={state===2?{borderColor:"white",height:'12px',width:'12px'}:{}}
            id="dot-1"
          ></button>
        </div>
      </div>
    </div>
  )
}
