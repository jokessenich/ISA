import logo from './logo.svg';
import React from 'react'
import './App.css';
import Nav from './Components/Nav.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
      return (
        <div className="App">

            <Nav></Nav>
                                
            <Main></Main>
                    
            <Footer></Footer>
            </div>



      );
  } 
}

export default App;
