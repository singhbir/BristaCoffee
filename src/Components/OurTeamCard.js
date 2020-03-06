import React from 'react'
import t1 from '../images/team/1.jpg'
import t2 from '../images/team/2.jpg'
import t3 from '../images/team/3.jpg'
import './ourteam.css'

export default function OurTeamCard() {
    let mydata= [{
        name:"mark",
        img:t1,
        desc: "Lead Designer",
        delay:"300"
    },
    {
        name:"John",
        img:t2,
        desc: "Lead Marketer",
        delay:"500"
    },
    {
        name:"Peter",
        img:t3,
        desc: "Lead Developer",
        delay:"700"
    },

]
    return (
            <div className="row mr-0 pr-0 justify-content-center pb-4 pl-4">
                    {mydata.map((data)=>{
                    return (<div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="ourteamcard" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out-cubic">

                        
                            <div className="card border-0 pt-2 mb-2" >
                                <img className="card-img-top img-fluid rounded-circle" src={data.img}/>
                                <div className="card-body">
                                    <h1>
                                        {data.name}
                                    </h1>
                                    <h4>
                                        {data.desc}
                                    </h4>
                                    <div className="ourteamlinks">
                                       <ul>
                                           <li className="animated infinite jello">
                                               <a href='https://github.com/singhbir?tab=repositories' target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                                           </li>
                                           <li className="animated infinite jello">
                                               <a href='https://in.linkedin.com/in/birvarindersingh' target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                           </li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
    </div>)})}
            </div>
        
    )
}
