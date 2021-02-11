import React from 'react';
import renderer from 'react-test-renderer'
import ExampleFunctionalComponent from "./components/ExampleFunctionalComponent";

// test suite
describe('ExampleFunctionalComponent suite', () => {

  // A simple test case, 'it()' is an alias for the test function, they are equivelant
  it('label renders correctly', () => {

    // renderer just returns a simple javascript object representation of the REACT component
    const component = renderer.create(<ExampleFunctionalComponent inputText='test'/>);
    expect(component.root.findByType('label').props.children).toEqual('type to change the state: ');
  })

  //
  it('label renders correctly', () => {
    const component = renderer.create(<ExampleFunctionalComponent inputText={'test'}/>);
    expect(component.root.findByType('input').props.value).toEqual('test');
  })

  it('Matches the last test', () => {
    const component = renderer.create(<ExampleFunctionalComponent inputText={'test'}/>);
    let snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  })

})

describe('ExampleFunctionalComponent suite', () => {

  // A simple test case, 'it()' is an alias for the test function, they are equivelant
  it('label renders correctly', () => {

    // renderer just returns a simple javascript object representation of the REACT component
    const component = renderer.create(<ExampleFunctionalComponent inputText='test'/>);
    expect(component.root.findByType('label').props.children).toEqual('type to change the state: ');
  })

  //
  it('label renders correctly', () => {
    const component = renderer.create(<ExampleFunctionalComponent inputText={'test'}/>);
    expect(component.root.findByType('input').props.value).toEqual('test');
  })
})
