import React from 'react'
import './ServicePage.css'
function ServiceCards() {
    return (
        <div className="row mr-0 pr-0 scardmain">
            <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="card m-0 border-0"  data-aos="fade-down"  data-aos-duration="1000"  data-aos-delay="100" data-aos-mirror="true">
                        <div className="card-body service">
                            <div className="serviceicon">
                                <i className="fa fa-shopping-cart mb-3 rounded-circle" aria-hidden="true"></i>
                            </div>
                            <h4>Coffee at home</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Minima maxime quam architecto
                            quo inventore harum ex magni, dicta impedit.
                            </p>
                        </div>
                  </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="card m-0 border-0"  data-aos="fade-down"  data-aos-duration="1000"  data-aos-delay="400" data-aos-mirror="true">
                        <div className="card-body service">
                            <div className="serviceicon">
                                <i className="fa fa-laptop mb-3 rounded-circle" aria-hidden="true"></i>
                            </div>
                            <h4>Coffee makes great websites</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Minima maxime quam architecto 
                            quo inventore harum ex magni, dicta impedit.
                            </p>
                        </div>
                  </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="card m-0 border-0"  data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="700" data-aos-mirror="true">
                        <div className="card-body service">
                            <div className="serviceicon">
                                <i className="fa fa-lock mb-3 rounded-circle" aria-hidden="true"></i>
                            </div>
                            <h4>Security people works on Coffee</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Minima maxime quam architecto 
                            quo inventore harum ex magni, dicta impedit.
                            </p>
                        </div>
                  </div>
            </div>
        </div>
        
    )
}

export default ServiceCards;
