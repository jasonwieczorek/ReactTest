import React from "react";

import {Form, Container, Row, Col} from 'react-bootstrap';
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
            <Form.Group controlId="formBasicCheckbox">
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
                            <Row>
                                <Col sm={4}>
                                    <Form.Label>Search Game</Form.Label>
                                    <Form.Control type="text" value={gameSearch} onChange={handleSearch} placeholder="filter" />
                                </Col>
                                <Col>
                                    <Form.Label>Game Selection</Form.Label>
                                    <Form.Control as="select" multiple>
                                        {games.map(function(game) {
                                            return <option value={game.id}>{game.title}</option>
                                        })}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Container>

                    </>
                }
            </Form.Group>
        </Form>
    );
}

export default ExampleFunctionalComponentForm;