import React from 'react';
import './App.css';
import ExampleClassComponent from './components/ExampleClassComponent';
import ExampleFunctionalComponent from './components/ExampleFunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';
import ExampleListComponent from "./components/ExampleListComponent";
import ExampleFunctionalComponentWithCallbackHandler from "./components/ExampleFunctionalComponentWithCallbackHandler";
import ExampleFunctionalComponentForm from "./components/ExampleFunctionalComponentForm";
import ExampleFunctionalComponentKeySpamEventDelay from "./components/ExampleFunctionalComponentKeySpamEventDelay";

function App() {

    // React Hook, creates some state for this function and makes a getter to access it.
    const[callBackHandlerState, setCallBackHandlerState] = React.useState('');

    // A simple list that we pass to a child List rendering component
    const list = [
        {
            id: 1,
            title: 'Gears of War'
        },
        {
            id: 2,
            title: 'Apex'
        }
    ];

    /*
     * Demonstration of a CallbackHandler that sets this.state from a child search components inputs
     */
    const handleSearch = event => {

        setCallBackHandlerState(event.target.value);
    };

    // JSX -  everything in {} can be simple javascript
    return (

        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Jasons React Sandbox</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        List displaying Props example
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body><ExampleListComponent list={list}/></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        CallBack Handler Example (tree props and state)
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <ExampleFunctionalComponentWithCallbackHandler onSearch={handleSearch}/>
                                        <p><b>App.js state</b>: {callBackHandlerState}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        Form Example
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <ExampleFunctionalComponentForm
                                            isChecked={false}
                                        />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        Key Spam Delay Demo
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <ExampleFunctionalComponentKeySpamEventDelay/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default App;
