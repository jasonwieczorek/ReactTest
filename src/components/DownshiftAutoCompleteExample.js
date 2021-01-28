import React, {useEffect} from "react";

import Downshift from "downshift";
import {Col, Container, Row, Form, ListGroup, Button} from "react-bootstrap";

// pretend data from an axios call
const videoGames = [];

function generateListItems() {

    if (videoGames.length === 0) {

        for (let i = 1; i < 2000; i++) {

            videoGames.push({
                id: i,
                value: 'Apex ' + i
            })
        }
    }

    return videoGames;

}

const DownshiftAutoCompleteExample = (props) => {

    generateListItems();

    // state
    const [searchTerm, setSearchTerm] = React.useState('');
    const [games, setGames] = React.useState([]);
    const [selection, setSelection] = React.useState( '');

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

    const listGroupComparison = function (prevProps, nextProps) {
        // these ones are easy if any of these changed, we should re-render
        if (prevProps.inputValue === nextProps.inputValue) return false;

    };

    // a memoized thing that will only re-render if the properties passed in change
    const MemoizedListGroup = React.memo(function({getMenuProps, getItemProps, items, highlightedIndex, selectedItem }) {
        console.log('rendering list group!');

        return (
            <ListGroup as="ul"  {...getMenuProps()}>
                {items
                    .map((item, index) => (
                        <MemoizedListItem
                            key={item.id}
                            getItemProps={getItemProps}
                            item={item}
                            highlightedIndex={highlightedIndex}
                            selectedItem={selectedItem}
                            index={index}
                        >
                            {item.value}
                        </MemoizedListItem>
                    ))}
            </ListGroup>
        )
    }, listGroupComparison);

    const listItemComparison = function (prevProps, nextProps) {
        // these ones are easy if any of these changed, we should re-render
        if (prevProps.getItemProps !== nextProps.getItemProps) return false
        if (prevProps.items !== nextProps.items) return false
        if (prevProps.index !== nextProps.index) return false
        if (prevProps.selectedItem !== nextProps.selectedItem) return false

        // this is trickier. We should only re-render if this list item:
        // 1. was highlighted before and now it's not
        // 2. was not highlighted before and now it is
        if (prevProps.highlightedIndex !== nextProps.highlightedIndex) {
            const wasPrevHighlighted = prevProps.highlightedIndex === prevProps.index
            const isNowHighlighted = nextProps.highlightedIndex === nextProps.index
            return wasPrevHighlighted === isNowHighlighted
        }
        return true
    };

    // a memoized thing that will only re-render if the properties passed in change
    const MemoizedListItem = React.memo(function({getItemProps, item, highlightedIndex, selectedItem, index, ...props}) {

        const isHighlighted = highlightedIndex === index;

        return (
                <li
                        {...getItemProps({
                            item,
                            index,
                            style: {
                                backgroundColor: isHighlighted ? 'lightgray' : 'inherit',
                            },
                            ...props
                        })}
                        >

                </li>
        )
    }, listItemComparison);

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
                  setItemCount,
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
                                        setItemCount={setItemCount}
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