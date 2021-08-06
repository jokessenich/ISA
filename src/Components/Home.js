import React from 'react'
import './Home.css'
import '../App.css';

import {Link} from 'react-router-dom'
import Uxhome from './Uxhome.js'
//import Context from '../../Context'

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <header className="App-header">
                <a className = "entrydot"></a>

            <div className="mainstuff">
                <h3 className="breathe">breathe</h3>
                <div className="entry content">
                    <h1 className="entryheader">Integrative Self Analysis</h1>
                    <h3 className="entrysubheader">Embracing Our Inner Selves</h3>
                    <Link to='/home' className="homelink">Enter</Link>
                </div>
                </div>
                </header>
            </div>
        )
    }
}