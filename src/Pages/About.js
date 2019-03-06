import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import RecipeReviewCard from '../Components/card/card';
import Jumbotron from '../Components/Jumbotron/Jumbotron';




class About extends Component {
    render() {
        return (
          
            <div className="App">

             
                

                <Container fluid>

                    <br />
                    <Row>


                        <h1>About page</h1>

                    </Row>
                    <br />
                    </Container>

               

                   
                    

                </div>
           
        );
    }
}

export default About;