import React from 'react'
import './contactus.css'
import Cusform from './Cusform'
function Contactus() {
    return (
        <div className="mainContactus">
            <div className="contactustext col-lg-12">
                    <h1 className="mb-2">
                        let's have a coffee
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <Cusform/>
            <footer className="pb-4 pt-4">
                  <a href="https://github.com/singhbir?tab=repositories" target="_blank">&copy;Birvarinder Singh</a>  
            </footer>
        </div>
    )
}

export default Contactus
