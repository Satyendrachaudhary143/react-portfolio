import React from 'react'
import Cart from "../Cart/Cart"
import "../Css/project.css"
import food from "../../assets/file/food.png"
import va from "../../assets/file/va.png"
import tti from "../../assets/file/tti.png"
import br from "../../assets/file/br.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function Project() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".project .he", {
            y: 100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".project .he",
                scroll: "body",
                scrub: 2,

                start: "top 80%",
                end: "top 30%",
            }

        });
        gsap.from(".slider ", {
            y: 100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".slider",
                scroll: "body",
                scrub: 2,

                start: "top 80%",
                end: "top 30%",
            }

        });
    }
    )

    return (
        <div className='project' id='project'>
            <h1 className='he'>2+ YEARS EXPERIENCE IN PROJECTS</h1>
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
