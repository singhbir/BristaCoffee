import React from 'react'
import './ourteam.css'
import OurTeamCard from './OurTeamCard'
function OurTeamComponent() {
    return (
        <div className="ourteammain pb-5">
            <div className="OurTeamMainText">
                <h1>Our Amazing Team </h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <OurTeamCard/>
            <div className="ourteambtext">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, 
                    laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde</p>
            </div>
        </div>
    )
}

export default OurTeamComponent
