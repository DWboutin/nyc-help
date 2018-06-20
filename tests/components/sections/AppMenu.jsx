import 'jsdom-global/register';

import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import AppMenu from '../../../src/components/sections/AppMenu';

import makeStore from '../../../src/utils/store';

describe('<AppMenu />', () => {
  const shallowComponent = () => shallow(
    <AppMenu store={makeStore()} />
  );

  const mountComponent = () => mount(
    <AppMenu store={makeStore()} />
  );

  describe('[Shallowed]', () => {
    it('renders without crashing', () => {
      const component = shallowComponent();

      expect(component.exists()).to.equal(true);
    });
  });

  describe('[Mounted]', () => {
    it('renders correctly', () => {
      const component = mountComponent();

      expect(component.exists()).to.equal(true);
    });

    it('renders <Drawer /> correctly', () => {
      const component = mountComponent();

      expect(component.find(Drawer).length).to.equal(1);
    });

    // @TODO: Test AppMenu content
  });
});