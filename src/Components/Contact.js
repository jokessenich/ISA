import React from 'react';
import "./Contact.css"
import NavBar from './NavBar';

export default class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden: true
        }
    }


render(){
    return(
        <div className="contact-background">
        <h3 className="breathe">breathe</h3>
        <NavBar></NavBar>
        <h1 className="page-header">Sessions</h1>
        <p className="description-section">
            Virtual: An inner exploration with Corky Matson & John Kessenich via zoom. In this session they will guide you on your internal journey of connecting and working with your low self. The session will be between 1 and 2 hours.
{<br />}{<br />}

In Person: John offers two ways of connecting in person. 
<li className = "session-types">An hour and a half session which, if desired, may include body work to clear energetic patterns.</li>
<li className = "session-types">A full day healing journey. John may be willing to travel to facilitate a healing journey.  </li>

            Current location: Santa Cruz, CA
            {<br />}{<br />}
        
        We prefer that you schedule the service, receive the treatment and then pay what you feel comfortable giving. 
        Suggested donation for a 1-2 hour session is $150.
        
        </p>
        <div className="contact-section">
        {this.state.hidden?<h3 onClick = {()=>this.setState({hidden:false})}>Click here for contact information</h3>:""}
        {this.state.hidden?'':<div id = "contactInfo">
            <h3 className="emailLink">For sessions or questions: </h3><br /><br /><a className="emailLink bigger" href="mailto:embracingourinnerselves@gmail.com">embracingourinnerselves (at) gmail.com </a>
            </div>}
            </div>
        </div>
    )
}
}