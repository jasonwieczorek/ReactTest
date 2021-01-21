import React from "react";

import {Form} from 'react-bootstrap';

/**
 * An example functional component, takes props to set things if needed but
 * all inputs will have a default value
 */
const ExampleFunctionalComponentForm = (props) => {

    // Functional components use React hooks to handle state
    const[isChecked, setIsChecked] = React.useState(props.isChecked === undefined ? false : props.isChecked);
    const[gameSearch, setGameSearch] = React.useState(props.currentGame === undefined ? '' : props.currentGame);

    // equivalent of componentDidMount
    React.useEffect(() => {
       console.log('functional render complete!')
    }, []);

    // fired when the checkbox is clicked
    const handleCheck = event => {
        setIsChecked(event.target.checked);

        // wipe out state from the input text if checkbox is not checked
        if (!event.target.checked) {
            setGameSearch('');
        }
    }

    const handleSearch = event => {
        setGameSearch(event.target.value);
    }

    return(
        <Form>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="click me!"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                {isChecked &&
                    /**
                     * <> is just a fragment, it allows multiple elements in our conditional render -->
                     */
                    <>
                        <br/>
                        <Form.Label>Search Game</Form.Label>
                        <Form.Control type="text" value={gameSearch} onChange={handleSearch} placeholder="type here to filter a list" />
                        <p><b>searched game:</b> {gameSearch}</p>
                    </>
                }
            </Form.Group>
        </Form>
    );
}

export default ExampleFunctionalComponentForm;