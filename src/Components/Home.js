import React from 'react'
import './Home.css'
import '../App.css';
import NavBar from './NavBar.js'
import PodcastLinks from './PodcastLinks';
import {Link} from 'react-router-dom'
//import Context from '../../Context'

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <div className="top-half">
                <h3 className="breathe">breathe</h3>
                <NavBar></NavBar>
                <PodcastLinks></PodcastLinks>

                <Link to='/' className="entryheader">Embracing Our Inner Selves</Link>

                </div>

                <div className="bottom-half">
                    <p className="p-introduction">
                Just as our feet move us through the outer world, our thoughts and emotions move us through our inner world.
                    {<br />}{<br />}
                    Let us put our ear to the ground and listen, breathe with and learn to deeply love our inner world. 
                    {<br />}{<br />}
                    We aim not to fix or fight, but to move with love, understanding and intention.
                    You are the only one who can bring peace to your inner world. Only then will you bring peace to the outer world. 
                    {<br />}{<br />}
                    {<br />}{<br />}
                    {/* <Link to="about" className="page-link">More</Link> */}
                    </p>
                </div>
                
            </div>
        )
    }
}