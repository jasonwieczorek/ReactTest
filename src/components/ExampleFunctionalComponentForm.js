import React from "react";

import {Form, Container, InputGroup, FormControl, Button} from 'react-bootstrap';
import {ListGroup} from "react-bootstrap";

/**
 *  An example Form
 */
const ExampleFunctionalComponentForm = (props) => {

    // Functional components use React hooks to handle state
    const[isChecked, setIsChecked] = React.useState(props.isChecked === undefined ? false : props.isChecked);
    const[gameSearch, setGameSearch] = React.useState(props.currentGame === undefined ? '' : props.currentGame);
    const[games, setGames] = React.useState([]);

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
            setGames([]);
        }
    }

    // fired when any key is typed into the search box
    const handleSearch = event => {
        setGameSearch(event.target.value);

        // mock the axios response
        const listOfGames = [
            {
                id: 1,
                title: 'Gears of War'
            },
            {
                id: 2,
                title: 'Apex'
            },
            {
                id: 3,
                title: 'Halo 5'
            },
            {
                id: 4,
                title: 'Monster Hunter'
            },
            {
                id: 5,
                title: 'Skyrim'
            }
        ];

        const searchedGames = listOfGames.filter(function(game) {
            return game.title
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });

        setGames(searchedGames);
    }

    return(
        <Form>
            <Form.Group controlId="postProcessor">
                <Form.Check
                    type="checkbox"
                    label="Convert final Value"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                {isChecked &&
                    /**
                     * <> is just a fragment, it allows multiple elements in our conditional render -->
                     */
                    <>
                        <br/>
                        <Container>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Container>

                    </>
                }
            </Form.Group>
        </Form>
    );
}

export default ExampleFunctionalComponentForm;