import React, {useEffect} from "react";

import Downshift from "downshift";
import {Col, Container, Row, Form, ListGroup, Button} from "react-bootstrap";

const videoGames = [
    {value: 'Gear of War'},
    {value: 'Apex'},
    {value: 'Call of Duty: Cold War'},
    {value: 'Feeding Frenzy'},
    {value: 'Super Game'},
]

const DownshiftAutoCompleteExample = (props) => {

    const[searchTerm, setSearchTerm] = React.useState('');

    useEffect(() => {
        const timeOut = setTimeout(postAxiosCall, 750);
        return () => clearTimeout(timeOut);
    }, [searchTerm]);

    // just gets some games
    const getGames = () => videoGames;

    const postAxiosCall = () => {

        //put axios shit here
        console.log("posting for some games...");

    }

    // simply sets the search term for us, this will trigger a useeffect
    const handleSearch = searchTerm => {
        setSearchTerm(searchTerm);
    }

    const handleSelection = selection => {
        console.log(selection + 'selected');
    }

    const itemToString = item => (item ? item.value : '');

    return (

        <Downshift
            onInputValueChange={handleSearch}
            onSelect={handleSelection}
            itemToString={itemToString}
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
                            <Form.Label {...getLabelProps()}>Search Game</Form.Label>
                            <div className='input-group'>
                                <Form.Control type="text" {...getInputProps()} />
                                <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
                                    &#8595;
                                </Button>
                            </div>
                        </Row>
                        <Row>
                            <ListGroup as="ul" {...getMenuProps()}>
                                {isOpen &&
                                videoGames
                                    .filter((item) => !inputValue || item.value.includes(inputValue))
                                    .map((item, index) => (
                                        <ListGroup as="li"
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
                                        </ListGroup>
                                    ))}
                            </ListGroup>
                        </Row>
                    </Container>
                </div>
            )}
        </Downshift>
    );
}

export default DownshiftAutoCompleteExample;