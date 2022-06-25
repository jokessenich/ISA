import React from 'react';
import "./Contact.css"
import NavBar from './NavBar';
import PodcastLinks from './PodcastLinks';

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
        <PodcastLinks></PodcastLinks>

        <h1 className="page-header">Sessions</h1>
        <p className="description-section">
            Virtual: An inner exploration with Corky Matson and/or John Kessenich via zoom. In this session they will guide you on your internal journey of connecting and working with your low self. The session will be between 1 and 2 hours.
{<br />}{<br />}

In Person: John offers three ways of connecting in person. 
<li className = "session-types">An inner exploration with interactive imagery only</li>
<li className = "session-types">An inner exploration with integrated body work to clear energetic patterns.</li>
<li className = "session-types">An inner exploration with Reiki</li>



            Current location: Ann Arbor, MI
            {<br />}{<br />}
        
        We prefer that you schedule the service, receive the treatment and then pay what you feel comfortable giving. 
        
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