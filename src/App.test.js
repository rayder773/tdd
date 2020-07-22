import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import {DATA_TEST} from "./constant";

Enzyme.configure({ adapter: new EnzymeAdapter });

/**
 * @function setup - return shallowComponent
 * @param {Object} props
 * @param {Object} state
 * @returns {shallowComponent}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App />);

  if(state) wrapper.setState(state);

  return wrapper;
};

const findElementByAttr = (wrapper = setup(), attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
}

test('render app component', () => {
  const wrapper = setup();
  const appComponent = findElementByAttr(wrapper, DATA_TEST.APP);

  expect(appComponent.length).toBe(1);
});

test('test button click increment', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  const button = findElementByAttr(wrapper, DATA_TEST.INCREMENT_BUTTON);
  button.simulate('click');

  const displayCounter = findElementByAttr(wrapper, DATA_TEST.COUNTER);
  expect(displayCounter.text()).toContain(counter + 1)
})

test('test button click decrement', () => {
  const wrapper = setup();

  const button = findElementByAttr(wrapper, DATA_TEST.DECREMENT_BUTTON);
  expect(button.length).toBe(1);

  for (let i = 0; i < 10; i++) {
    button.simulate('click');
    wrapper.update()
  }

  const displayCounter = findElementByAttr(wrapper, DATA_TEST.COUNTER);
  expect(displayCounter.text()).toContain("0")
})
