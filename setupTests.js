// setup file
/* eslint-disable */
import { configure, shallow, render, mount } from 'enzyme';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Adapter from 'enzyme-adapter-react-16';
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
process.env.SPACE = 'dev';
global.shallow = shallow;
global.render = render;
global.mount = mount;


