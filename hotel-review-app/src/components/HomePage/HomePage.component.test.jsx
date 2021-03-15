import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";
import FormContext from '../../data/contexts';
import HomePage from  "./index";

Enzyme.configure({adapter: new Adapter()});
const {describe, it, expect} = global;
const context = {FormContext};
const setup = () => {
    const component = (
        <FormContext.Provider value={{context}}>
            <Router>
            <HomePage/>
        </Router>
        </FormContext.Provider>
    );

    const enzymeWrapper = shallow(
        <FormContext.Provider value={{context}}>
            <Router>
            <HomePage/>
        </Router>
        </FormContext.Provider>
    );

    const mountedComp = mount(
        <FormContext.Provider value={{context}}>
            <Router>
            <HomePage/>
        </Router>
        </FormContext.Provider> 
    );
    return {
        enzymeWrapper,
        component,
        mountedComp
    }
};

describe("snapshot testing", () => {
    it("should render the testing component correctly", () => {
        const {component} = setup();
        const renderedComponent = renderer.create(component);
        const tree = renderedComponent.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should render the select box", () => {
        const {mountedComp} = setup();
        const SelectComponent = mountedComp.find("Field");
        expect(SelectComponent.length).toEqual(1); 
    })
})