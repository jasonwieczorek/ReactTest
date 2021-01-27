import React, {useEffect} from "react";

import Downshift from "downshift";
import {Col, Container, Row, Form, ListGroup, Button} from "react-bootstrap";

// pretend data from an axios call
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

    // state
    const [searchTerm, setSearchTerm] = React.useState('');
    const [games, setGames] = React.useState([]);
    const [selection, setSelection] = React.useState( props.selection ? props.selection : null);

    // triggers an axios call with the current search term if user stops typing for 750ms
    useEffect(() => {

        if (searchTerm.length > 0) {
            const timeOut = setTimeout(postAxiosCall, 500);
            return () => clearTimeout(timeOut);
        }

    }, [searchTerm]);

    // mocks an axios call
    const postAxiosCall = () => {

        setGames(videoGames);
    }

    // lifts the selected item to the parent component
    const liftState = (selection) => {
        props.liftState(selection);
    }

    // handles DownShift's state changes
    const handleStateChange = (changes) => {

        switch (changes.type) {
            case Downshift.stateChangeTypes.changeInput:
                setGames([]);
                setSearchTerm(changes.inputValue);
                break;
            case Downshift.stateChangeTypes.clickItem:
                liftState(changes.selectedItem);
                break;
            default:
        }
    }

    // utility function to set Downshifts internal state
    const itemToString = item => (item ? item.value : '');

    return (

        <Downshift
            initialSelectedItem={selection}
            itemToString={itemToString}
            onStateChange={handleStateChange}
        >
            {/* Downshifts child functions, does things like set up wcag compliance and deals with internal state*/}
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
                                    <Button {...getToggleButtonProps()} >
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