import 'jsdom-global/register';

import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Layout from '../../src/wrapper/Layout';
import AppHeader from '../../src/components/sections/AppHeader';
import AppMenu from '../../src/components/sections/AppMenu';

import makeStore from '../../src/utils/store';

import messages from '../../src/lang/en.json';

describe('<Layout />', () => {
  let dispatchMock;
  let changeLocaleMock;

  beforeEach(() => {
    dispatchMock = sinon.spy();
    changeLocaleMock = sinon.spy();
  });

  const shallowComponent = () => shallow(
    <Layout now={Date.now()} locale="en" messages={messages} dispatch={dispatchMock} changeLocale={changeLocaleMock}>
      <h1>Novalab</h1>
      <p>From tests</p>
    </Layout>
  );

  const mountComponent = () => mount(
    <Provider store={makeStore()}>
      <Layout now={Date.now()} locale="en" messages={messages} dispatch={dispatchMock} changeLocale={changeLocaleMock}>
        <h1>Novalab</h1>
        <p>From tests</p>
      </Layout>
    </Provider>
  );

  describe('[Shallowed]', () => {
    it('renders without crashing', () => {
      const component = shallowComponent();

      expect(component.exists()).to.equal(true);
    });

    it('renders children component without crashing', () => {
      const component = shallowComponent();

      expect(component.find('h1').length).to.equal(1);
      expect(component.find('h1').text()).to.equal('Novalab');
      expect(component.find('p').length).to.equal(1);
      expect(component.find('p').text()).to.equal('From tests');
    });
  });

  describe('[Shallowed]', () => {
    it('[Mounted] renders <AppHeader /> component without crashing', () => {
      const component = mountComponent();

      expect(component.find(AppHeader).length).to.equal(1);
    });

    it('[Mounted] renders <AppMenu /> component without crashing', () => {
      const component = mountComponent();

      expect(component.find(AppMenu).length).to.equal(1);
    });

    it('[Mounted] renders children component without crashing', () => {
      const component = mountComponent();

      expect(component.find('h1').length).to.equal(1);
      expect(component.find('h1').text()).to.equal('Novalab');
      expect(component.find('p').length).to.equal(1);
      expect(component.find('p').text()).to.equal('From tests');
    });

    it('[Mounted] click on logo opens menu ', () => {
      const handleMainMenuOpenSpy = sinon.spy(AppHeader.prototype, 'handleMainMenuOpen');
      const component = mountComponent();

      expect(component.find('.app-menu--opener').length).to.equal(1);
      component.find('.app-menu--opener').simulate('click');
      expect(handleMainMenuOpenSpy.calledOnce).to.equal(true);
      handleMainMenuOpenSpy.restore();
    });
  });
});