import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import about from '../images/about2.jpg'
import one from '../images/about/1.jpg'
import two from '../images/about/2.jpeg'
import four from '../images/about/4.jpg'
import five from '../images/about/5.jpg'

import { Parallax } from 'react-parallax';
import './aboutcomponent.css'
function AboutComponent() {
    return (
        <div>
<Parallax
            blur={5}
            bgImage={about}
            bgImageAlt="the cat"
            strength={1000}
            className="myparallex"
        >
            <div className="mainTextWrapper">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
            {/* TIMELINE COMPONENT */}
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={one} alt="hello world" className="img-fluid rounded-circle" style={{ position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'inherit'}}></img>}
  >
    <h3 className="vertical-timeline-element-title">LAUCH PARTY</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
    recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
    icon={<img src={two} alt="hello world" className="img-fluid rounded-circle" style={{ position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'inherit'}}></img>}
  >
    <h3 className="vertical-timeline-element-title">LATER IN 2016</h3>
    <h4 className="vertical-timeline-element-subtitle">Are you there</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
    recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={five} alt="hello world" className="img-fluid rounded-circle" style={{ position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'inherit'}}></img>}
  >
    <h3 className="vertical-timeline-element-title">LOOK AT THIS</h3>
    <h4 className="vertical-timeline-element-subtitle">Don't stare here</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
    recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
    icon={<img src={four} alt="hello world" className="img-fluid rounded-circle" style={{ position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'inherit'}}></img>}
  >
    <h3 className="vertical-timeline-element-title">ABRA KA DABRA</h3>
    <h4 className="vertical-timeline-element-subtitle">Does that even mean something</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
    recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
    </p>
  </VerticalTimelineElement>
        
  
  <VerticalTimelineElement
    className="animated infinite heartBeat"
    iconStyle={{}}
    icon={<img src={about} alt="hello world" className="img-fluid rounded-circle" style={{ position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'inherit'}}></img>}
  />
</VerticalTimeline>   
{/* TIMELINE COMPONENT END */}
</Parallax>
</div>
    )
}

export default AboutComponent
