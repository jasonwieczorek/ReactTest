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

    const comparisonFunction = function (prevProps, nextProps) {
        return prevProps.items.length === nextProps.items.length;
    };

    // a memoized thing that will only re-render if the properties passed in change
    const MemoizedListGroup = React.memo(function({getMenuProps, getItemProps, items, inputValue, highlightedIndex, selectedItem }) {
        console.log('rendering list group!');

        return (
            <ListGroup as="ul" className="listGroup-style" {...getMenuProps()}>
                {items
                    .map((item, index) => (
                        <ListGroup.Item as="li" className="listItem-style"
                                        {...getItemProps({
                                            key: index,
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
        )
    }, comparisonFunction);

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
                                    <MemoizedListGroup
                                        getMenuProps={getMenuProps}
                                        getItemProps={getItemProps}
                                        items={games}
                                        inputValue={inputValue}
                                        highlightedIndex={highlightedIndex}
                                        selectedItem={selectedItem}
                                    />

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