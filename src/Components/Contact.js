import React from 'react';
import "./Contact.css"

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

        <h1 className="page-header">Sessions</h1>
        <p className="description-section">
            There are two types of sessions offered. One session option is a conversation with Corky Matson & John Kessenich via zoom. In this session they will intuitively guide you on your internal journey of connecting with your low self. The session will be between 1 and 2 hours. A few followups in the weeks ahead are usually desired by the practitioner.

            An alternate session option is with John Kessenich in person. In this session, John will offer hands on body work that targets the physiological root of emotional blockages. This will include low self work, breath work, visualization, recall, and touch.

            The suggested cost for these services is $150, but we prefer that you schedule the service and then pay what you feel comfortable giving, after receiving the treatment. For those with less resources, we accept what you can afford.
        </p>
        {this.state.hidden?<h3 onClick = {()=>this.setState({hidden:false})}>Click here for contact information</h3>:""}
        {this.state.hidden?'':<div id = "contactInfo">
            <h3>For sessions or questions: <br /><br /><a className="uxhomelink" href="mailto:integrativeselfanalysis@gmail.com">integrativeselfanalysis (at) gmail.com </a></h3>
            </div>}
        </div>
    )
}
}