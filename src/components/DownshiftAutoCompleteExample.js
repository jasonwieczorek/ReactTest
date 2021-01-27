import React, {useEffect} from "react";

import Downshift from "downshift";
import {Col, Container, Row, Form, ListGroup, Button} from "react-bootstrap";

const videoGames = [
    {value: 'Gears of War'},
    {value: 'Apex'},
    {value: 'Call of Duty: Cold War'},
    {value: 'Feeding Frenzy'},
    {value: 'Super Game'},
    {value: 'Contra'},
    {value: 'Metroid'},
    {value: 'Mario'},
]

const DownshiftAutoCompleteExample = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [games, setGames] = React.useState([]);
    const [selection, setSelection] = React.useState(null);

    useEffect(() => {
        if (searchTerm.length > 0 && selection === null) {
            const timeOut = setTimeout(postAxiosCall, 750);
            return () => clearTimeout(timeOut);
        }

    }, [searchTerm]);

    // just gets some games
    const mockAxiosCall = () => {
        return videoGames;
    }

    const postAxiosCall = () => {

        //put axios shit here
        console.log('posting axios call')
        setGames(mockAxiosCall);
    }

    // simply sets the search term for us, this will trigger a useeffect
    const handleSearch = searchTerm => {
        setGames([]);
        setSelection(null);
        setSearchTerm(searchTerm);
    }

    const handleSelection = chosen => {
        setSelection(chosen);
    }

    const handleStateChange = (changes) => {
        console.log(changes);

        switch (changes.type) {
            case Downshift.stateChangeTypes.changeInput:
                setGames([]);
                setSearchTerm(changes.inputValue);
                break;
            default:
                console.log(changes);

        }
    }

    const itemToString = item => (item ? item.value : '');

    return (

        <Downshift
            // onInputValueChange={handleSearch}
            // onSelect={handleSelection}
            itemToString={itemToString}
            onStateChange={handleStateChange}
        >
            {({
                  getLabelProps,
                  getInputProps,
                  getItemProps,
                  getMenuProps,
                  getToggleButtonProps,
                  inputValue,
                  highlightedIndex,
                  selectedItem,
                  isOpen,
              }) => (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Label {...getLabelProps()}>Search Game</Form.Label>
                                <div className='input-group'>
                                    <Form.Control type="text" {...getInputProps()} />
                                    <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
                                        &#8595;
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {isOpen &&

                                <ListGroup as="ul" className="listGroup-style" {...getMenuProps()}>
                                    {games
                                        .filter((item) => !inputValue || item.value.toLowerCase().includes(inputValue.toLowerCase()))
                                        .map((item, index) => (
                                            <ListGroup.Item as="li" className="listItem-style"
                                                            {...getItemProps({
                                                                key: `${item.value}${index}`,
                                                                item,
                                                                index,
                                                                style: {
                                                                    backgroundColor:
                                                                        highlightedIndex === index ? 'lightgray' : 'white',
                                                                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                                                                },
                                                            })}
                                            >
                                                {item.value}
                                            </ListGroup.Item>
                                        ))}
                                </ListGroup>
                                }

                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Downshift>
    );
}

export default DownshiftAutoCompleteExample;