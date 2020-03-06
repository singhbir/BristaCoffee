import React from 'react'
import './portfolio.css'
import PortfolioCards from './PortfolioCards'
function Portfolio() {
    return (
        <div className="Portfoliomaintext">
            <h1> <i class="fa fa-bell" aria-hidden="true"></i> &nbsp;Portfolio</h1>
            <p>no idea, why this bell was used in portfolio.</p>
            <PortfolioCards/>
        </div>
    )
}

export default Portfolio
