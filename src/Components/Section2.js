import React, { useState, useRef } from "react"
import useForm from "../useForm"

export default function Section2(props) {
  const { formData, errorData, handleChange, handleSubmit } = useForm()
  const { services } = props

  const [percentage, setPercentage] = useState({
    first: `${services.stats[0].amount}`,
    second: `${services.stats[1].amount}`,
    third: `${services.stats[2].amount}`,
    fourth: `${services.stats[3].amount}`,
  })
  const inputRef = useRef(null)

  const colors = {
    first: "#0089bd",
    second: "#FAA613",
    third: "#eb8256",
    fourth: "#7b53d9",
  }
  const inactive = "#dbdbdb"

  const styleInput1 = {
    background: `linear-gradient(90deg, #0089bd 0% 
      ${percentage.first / 10
    }%,   ${inactive} ${percentage.first / 10}% 100%)`,
  }
  const styleInput2 = {
    background: `linear-gradient(90deg, #FAA613 0% ${
      percentage.second / 10
    }%,   ${inactive} ${percentage.second / 10}% 100%)`,
  }
  const styleInput3 = {
    background: `linear-gradient(90deg, #eb8256 0% ${
      percentage.third / 10
    }%,   ${inactive} ${percentage.third / 10}% 100%)`,
  }
  const styleInput4 = {
    background: `linear-gradient(90deg, #7b53d9 0% ${
      percentage.fourth / 10
    }%,   ${inactive} ${percentage.fourth / 10}% 100%)`,
  }

  function handlePercentage(event) {
    const { name, value } = event.target
    setPercentage((prevPercentage) => ({ ...prevPercentage, [name]: value }))
    const newBackgroundStyle = `linear-gradient(90deg, ${colors.name} 0% ${
      percentage.name / 10
    }%,   ${inactive} ${percentage.name / 10}% 100%)`
    inputRef.current.style.background = newBackgroundStyle
  }

  return (
    <div className="section2">
      {/* Percentage Slider */}

      <div className="box slider">
        <h4 id="slider-title">{services.title}</h4>
        <h1 id="slider-graph">{services.graphText}</h1>
        <h2 className="slider-percentage">
          percentage1 {percentage.first / 10}%
        </h2>
        <input
          ref={inputRef}
          type="range"
          min="0"
          max="1000"
          name="first"
          className="percentage1"
          style={styleInput1}
          defaultValue={percentage.first}
          onChange={handlePercentage}
        />
        <h2 className="slider-percentage">
          percentage2 {percentage.second / 10}%
        </h2>
        <input
          ref={inputRef}
          type="range"
          min="0"
          max="1000"
          name="second"
          className="percentage1"
          defaultValue={percentage.second}
          style={styleInput2}
          onChange={handlePercentage}
        />
        <h2 className="slider-percentage">
          percentage3 {percentage.third / 10}%
        </h2>

        <input
          ref={inputRef}
          type="range"
          min="0"
          max="1000"
          name="third"
          className="percentage1"
          defaultValue={percentage.third}
          style={styleInput3}
          onChange={handlePercentage}
        />
        <h2 className="slider-percentage">
          percentage4 {percentage.fourth / 10}%
        </h2>

        <input
          ref={inputRef}
          type="range"
          min="0"
          max="1000"
          name="fourth"
          className="percentage1"
          defaultValue={percentage.fourth}
          style={styleInput4}
          onChange={handlePercentage}
        />
      </div>

      {/* Validate Form */}

      <div className="box form">
        <h2 className="validate">{services.formText}</h2>
        <p>
          We work with ecosystem leaders, corporations and startups worldwide.
        </p>
        <p id="marg-bot">How can we help you?</p>
        <form onSubmit={handleSubmit} className="submitting-form">
          <input
            className={`${errorData.phone && "error-border"}`}
            type="text"
            placeholder={services.formLabels[0]}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errorData.phone && <p id="err">{errorData.phone}</p>}
          <input
            className={`${errorData.email && "error-border"}`}
            type="text"
            placeholder={services.formLabels[1]}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errorData.email && <p id="err">{errorData.email}</p>}
          <input
            className={`${errorData.password && "error-border"}`}
            type="password"
            placeholder={services.formLabels[2]}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errorData.password && <p id="err">{errorData.password}</p>}
          <button>{services.buttonText}</button>
        </form>
      </div>
    </div>
  )
}
