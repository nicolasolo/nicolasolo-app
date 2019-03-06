import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
import RecipeReviewCard from './Components/card/card';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contacts';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
      return (
         
          <Router>
        <div className="App">

                  <Header />
                  <br />
                  <br />
            
             
            
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
                  <Route path="/Gallery" component={Gallery} />
                  <Route path="/Contact" component={Contact} />

                
               
           

            
            <Footer />
              </div>
          </Router>
         
    );
  }
}

export default App;
