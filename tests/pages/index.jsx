import 'jsdom-global/register';

import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Index from '../../src/pages/index';
import Layout from '../../src/wrapper/Layout';

import messages from '../../src/lang/en.json';

describe('<Index />', () => {
  const shallowComponent = () => shallow(<Index now={Date.now()} locale="en" messages={messages} />);

  const mountComponent = () => mount(<Index now={Date.now()} locale="en" messages={messages} />);

  describe('[Shallowed]', () => {
    it('renders without crashing', () => {
      const component = shallowComponent();

      expect(component.exists()).to.equal(true);
    });
  });

  describe('[Mounted]', () => {
    it('mount without crashing', () => {
      const component = mountComponent();

      expect(component.exists()).to.equal(true);
    });

    it('have a <Layout /> component', () => {
      const component = mountComponent();

      expect(component.find(Layout).length).to.equal(1);
    });
  });
});