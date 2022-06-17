import React from 'react';
import './Podcast.css'
import NavBar from './NavBar'

export default class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden:true
        }
    }


render(){
    return(
        <div className="podcast-background">
            <h3 className="breathe">breathe</h3>
            <NavBar></NavBar>
            <h1 className="page-header">Podcast </h1>

            <h2 className="subheader">Episodes</h2>
            {<br />}        {<br />}

            <h3 className='episode-name'>Episode 1 - Introduction</h3>
            <iframe title="Introduction" allowtransparency="true" height="150" width="50%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=c4f9x-123deb9-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=f6f6f6&font-color=auto&logo_link=episode_page&btn-skin=666666"></iframe>
            {<br />}
            <h3 className='episode-name'>Episode 2 - A Sacred Connection</h3>
            <iframe title="A Sacred Connection" allowtransparency="true" height="150" width="50%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=k4byf-123e43f-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=f6f6f6&font-color=auto&logo_link=episode_page&btn-skin=666666"></iframe>
            {<br />}
            <h3 className='episode-name'>Episode 3 - Your Precious Self</h3>
            <iframe title="Your Precious Self" allowtransparency="true" height="150" width="50%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=i8gvd-123e445-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=f6f6f6&font-color=auto&logo_link=episode_page&btn-skin=666666"></iframe>
            {<br />}
            <h3 className='episode-name'>Episode 4 - Waking Up to Ourselves</h3>
            <iframe title="Waking Up to Ourselves" allowtransparency="true" height="150" width="100%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=vy7wc-1251b7a-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=f6f6f6&font-color=auto&logo_link=episode_page&btn-skin=666666"></iframe>
            <div className="contact-section">
                {this.state.hidden?<h3 onClick = {()=>this.setState({hidden:false})}>We welcome guests on our podcast as well as requested topics that listeners would like to hear more about.  {<br />} {<br />}{<br />}Click here for contact information</h3>:""}
                {this.state.hidden?'':<div id = "contactInfo">
                <h3 className="emailLink">For sessions or questions: </h3><br /><br /><a className="emailLink bigger" href="mailto:embracingourinnerselves@gmail.com">embracingourinnerselves (at) gmail.com </a>
                </div>}
            </div>
        </div>
    )
}
}