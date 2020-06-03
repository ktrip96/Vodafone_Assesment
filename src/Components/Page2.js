import React from 'react'
import {Link} from "react-router-dom"

export default function Page2() {
    return (
        <div className="page" >
            <h3 className="animate__animated animate__fadeInUp pageTitle">Congrats You Discovered the Easter Egg of this application!!</h3>
            <hr/>
            <Link to="/">
                <button type="button" class="page-button">Back to Main Page</button>
            </Link>
        </div>
    )
}
