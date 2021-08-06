import React from 'react';
import './Podcast.css'

export default class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }


render(){
    return(
        <div className="podcast-background">
        <h3 className="breathe">breathe</h3>

        <h1 className="page-header">Podcast </h1>
        {<br />}        {<br />}
        {<br />}        {<br />}

        <p>Episodes</p>
        {<br />}        {<br />}
        <iframe title="Episode 1- Introduction" allowtransparency="true" height="150" width="50%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=rt2i5-10ab36e-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=666666&font-color=auto&btn-skin=1b1b1b"></iframe>
        </div>
    )
}
}