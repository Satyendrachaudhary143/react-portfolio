import React from 'react'
import Cart from "../Cart/Cart"
import "../Css/project.css"
import food from "../../assets/file/food.png"
import va from "../../assets/file/va.png"
import tti from "../../assets/file/tti.png"
import br from "../../assets/file/br.png"

function Project() {


    return (
        <div className='project' id='projects'>
            <h1 className='section-title'>PROJECTS</h1>
            <div className="slider">
                <Cart title={"FOOD APP"} img={food} />
                <Cart title={"VIRTUAL ASSISTANT"} img={va} />
                <Cart title={"TEXT TO IMAGE"} img={tti} />
                <Cart title={"BACKGROUND REMOVER"} img={br} />

            </div>
        </div>
    )
}

export default Project
