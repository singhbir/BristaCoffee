import React ,{useEffect,useState}from 'react'
import './navs.css'
function Navs() {
    let [schange,setSchange]=useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => { 
          if (window.scrollY > 100) {
            setSchange(true)
          }
          else{
              setSchange(false)
          }
        })
      },[])
    
    
    return (
        <nav className={schange?"navbar navbar-expand-md fixed-top mycolor":"navbar navbar-expand-md fixed-top"}>
            <div className="navbar-brand animated infinite bounce "><a href="#"> Brista coffee <i className="fa fa-coffee" aria-hidden="true"></i></a></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                MENU&nbsp;<i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-between">
                   <li className="nav-link">
                       <a href="#secondpage" className="nav-item"><i className="fab fa-java" aria-hidden="true"/>&nbsp;Service</a>
                    </li> 
                    <li className="nav-link">
                       <a href="#thirdpage" className="nav-item"><i className="fa fa-bell" aria-hidden="true"/>&nbsp;Portfolio </a>
                    </li> 
                    <li className="nav-link">
                       <a href="#fourthpage" className="nav-item"><i className="fa fa-diamond" aria-hidden="true"/>&nbsp;About </a>
                    </li> 
                    <li className="nav-link">
                       <a href="#fifthpage" className="nav-item"><i className="fa fa-user" aria-hidden="true"/>&nbsp;Team</a>
                    </li> 
                    <li className="nav-link">
                       <a href="#sixthcomponent" className="nav-item"><i className="fa fa-volume-control-phone" aria-hidden="true"/>&nbsp;Contact </a>
                    </li> 
                </ul>

            </div>
        </nav>
    )
}

export default Navs
