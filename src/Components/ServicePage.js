import React from 'react'
import './ServicePage.css'
import ServiceCards from './ServiceCards'
function ServicePage() {
    return (
        <div>
            <div className="servicemaintext col-md-12 ">
                <h1 data-aos="slide-right" data-aos-duration="1000"><i className="fab fa-java" aria-hidden="true"></i>&nbsp;SERVICES</h1>
                <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="50">You can call for our services any time.</p>
            </div>
            <ServiceCards/>
        </div>
    )
}

export default ServicePage
