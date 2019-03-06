import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import RecipeReviewCard from '../Components/card/card';
import Jumbotron from '../Components/Jumbotron/Jumbotron';



class App extends Component {
    render() {
        return (

            
                <div className="App">

                   

                    <Jumbotron />


                    <Container fluid>

                        <br />
                        <Row>


                            <Col xs="auto" md="6" lg="3">

                                <RecipeReviewCard />

                            </Col>
                            <br />
                            <Col xs="auto" md="6" lg="3">

                                <RecipeReviewCard />

                            </Col>
                            <br />
                            <Col xs="auto" md="6" lg="3">

                                <RecipeReviewCard />

                            </Col>
                            <br />
                            <Col xs="auto" md="6" lg="3">

                                <RecipeReviewCard />

                            </Col>

                        </Row>
                        <br />

                        

                    </Container>


                    
                </div>

    
        );
    }
}

export default App;