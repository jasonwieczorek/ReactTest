import React from 'react';
import './App.css';
import ExampleClassComponent from './components/ExampleClassComponent';
import ExampleFunctionalComponent from './components/ExampleFunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button} from 'react-bootstrap';

function App() {

    // JSX -  everything in {} can be simple javascript
    return (

        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Class Component Example
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><ExampleClassComponent/> </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Functional Component Example
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body><ExampleFunctionalComponent/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default App;
