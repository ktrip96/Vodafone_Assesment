import React from 'react'
import {FaEye} from 'react-icons/fa'

export default function Section1({imageData}) {
    return (
        <div className ="section1">
            <div className = "box image1 image-position">
                <FaEye style={{fontSize:"40"}}/>
                {imageData.images[1].title}
                <hr style={{width:"40px"}}/>
            </div>
            <div className = "box image2"></div>
            <div className = "box image3"></div>
            <div className = "box image4"></div>
            <div className = "box image5"></div>
        </div>
    )
}
