import React from 'react'
import img1 from '../images/Portfolio/img1.jpg'
import img2 from '../images/Portfolio/img2.jpg'
import img3 from '../images/Portfolio/img3.jpg'

function PortfolioCards() {
    const arrs=[
        {
            img:img1,
            text1:"Coffee1",
            text2:"healthy coffee"
        },
        {
            img:img2,
            text1:"Coffee2",
            text2:"healthy coffee"
            
        },
        {
            img:img3,
            text1:"Coffee3",
            text2:"healthy coffee"
            
        },
        {
            img:img2,
            text1:"Coffee1",
            text2:"healthy coffee"
        },
        {
            img:img3,
            text1:"Coffee2",
            text2:"healthy coffee"
            
        },
        {
            img:img1,
            text1:"Coffee3",
            text2:"healthy coffee"
            
        }
    ]
    return (
        <div className="row mr-0 pr-0 justify-content-center pb-5">
           { arrs.map((arr)=> {return (<div className="col-md-6 col-sm-12 col-lg-4">
                <div className="card ml-4 mt-5 " data-aos="fade-up" data-aos-duration ="1000"  data-aos-delay="50" >
                <div className="imghover">
                        <img src={arr.img} alt="img" className="img-fluid card-img-top"/>
                </div>
                    <div className="card-body">
                        <h4>
                            {arr.text1}
                        </h4>
                        <p>
                            {arr.text2}
                        </p>
                    </div>

                </div>
            </div>
            )
                } )}
        </div>
    )
}

export default PortfolioCards
