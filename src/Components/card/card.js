import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import colors from 'reactstrap';

const Example = (props) => {

    return (
        <div>
            <Card>
                <CardBody>

                    <h1 className="text-danger">Card</h1>
                </CardBody>
                <CardImg center width="100%" src={require('../../img/R1.png')} alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button outline color="danger">Button</Button>             <Button outline color="primary">Button</Button>
                </CardBody>
            </Card>
            <br></br>
        </div>
       
    );
};

export default Example;