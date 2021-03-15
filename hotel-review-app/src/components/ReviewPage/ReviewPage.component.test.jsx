import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";
import ReviewPage from  "./index";

Enzyme.configure({adapter: new Adapter()});
const {describe, it, expect} = global;

const setup = () => {
    const component = (
        <Router>
            <ReviewPage/>
        </Router>
    );

    const enzymeWrapper = shallow(
        <Router>
            <ReviewPage/>
        </Router>
    );

    const mountedComp = mount(
        <Router>
            <ReviewPage/>
        </Router> 
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
})