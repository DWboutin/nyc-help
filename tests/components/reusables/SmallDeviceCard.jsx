import 'jsdom-global/register';

import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Typography from 'material-ui/Typography';

import SmallDeviceCard from '../../../src/components/reusables/SmallDeviceCard';

describe('<SmallDeviceCard />', () => {
  const shallowComponent = () => shallow(
    <SmallDeviceCard
      className="item"
      deviceIconClassName="far fa-microchip"
      deviceName="Arduino #1"
    />
  );

  const mountComponent = () => mount(
    <SmallDeviceCard
      className="item"
      deviceIconClassName="far fa-microchip"
      deviceName="Arduino #1"
    />
  );

  describe('[Shallowed]', () => {
    it('renders without crashing', () => {
      const component = shallowComponent();

      expect(component.exists()).to.equal(true);
    });
  });

  describe('[Mounted]', () => {
    it('renders text correctly', () => {
      const component = mountComponent();

      expect(component.find(Typography).length).to.equal(1);
      expect(component.find(Typography).text()).to.equal('Arduino #1');
    });

    it('renders two <i /> icons', () => {
      const component = mountComponent();

      expect(component.find('i').length).to.equal(2);
      expect(component.find('i').at(0).hasClass('far fa-microchip')).to.equal(true);
      expect(component.find('i').at(1).hasClass('grabber fal fa-bars')).to.equal(true);
    });
  });
});