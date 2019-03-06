import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
           
            <div>

                <br />
                <Button cvariant="outline" onClick={this.toggle}>{this.props.buttonLabel}SignIn</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sigin</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        

                            <Button inline>Sign in</Button>
                            <Button inline color="success" onClick={this.toggleNested}>Register</Button>
                        </Form>
                     
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                            <ModalBody>
                            
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleAddress">Nome</Label>
                                        <Input type="text" name="nome" id="nome" placeholder="Nicola" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">Cognome</Label>
                                        <Input type="text" name="cognome" id="cognome" placeholder="Solo" />
                                    </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col>
                                            <Button>Register</Button>
                                            <Button color="danger" onClick={this.toggleNested}>Exit</Button>{' '}
                                    </Col>
                                </FormGroup>
                                </Form>
                           
                            </ModalBody>
                        </Modal>
                        
                    </ModalBody>
                    
                </Modal>
            </div>
        );
    }
}

export default ModalExample;