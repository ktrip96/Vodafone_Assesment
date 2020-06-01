import React, { useState, useEffect } from "react"
import "./App.css"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import Slider from "./Components/Slider"
import SectionHeader from "./Components/SectionHeader"
import Loading from './Components/Loading'

function App() {
  const [section, setSection] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({ home: [], menu: [], slider: [], page: [] })


  const url = "https://voda-react-assessment.herokuapp.com/"

  useEffect(() => {
    let firstAPICall = fetch(url + "home")
    let secondAPICall = fetch(url + "menu")
    let thirdAPICall = fetch(url + "slider")
    let fourthAPICall = fetch(url + "page")

    Promise.all([firstAPICall, secondAPICall, thirdAPICall, fourthAPICall])
      .then((values) => Promise.all(values.map((value) => value.json())))
      .then((finalVals) => {
        setData((prevData) => ({
          home: finalVals[0],
          menu: finalVals[1],
          slider: finalVals[2],
          page: finalVals[3],
        }))
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) return <Loading/>
  else
    return (
      <div className="container">
        <Slider data={data.slider[0]} />
        <SectionHeader title={data.home[0].description} state={section} swap={setSection} />
        <div className="box main">
          {section === 1 ? (
            <Section1 imageData={data.home[0].sections[0]} />
          ) : (
            <Section2 services={data.home[0].sections[1]} />
          )}
        </div>
      </div>
    )
}

export default App
