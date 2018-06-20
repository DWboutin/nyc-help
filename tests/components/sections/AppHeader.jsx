import 'jsdom-global/register';

import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import AppHeader from '../../../src/components/sections/AppHeader';
import SVGNovaBecherLogo from '../../../src/components/svg/NovaBecherLogo';

import { changeLocale } from '../../../src/actions/application-actions';

import makeStore from '../../../src/utils/store';

describe('<AppHeader />', () => {
  const shallowComponent = () => shallow(
    <AppHeader
      dispatch={() => {}}
      changeLocale={() => {}}
      locale="en"
    />
  );

  const mountComponent = () => {
    const store = makeStore();

    return mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AppHeader
            dispatch={store.dispatch}
            changeLocale={(locale) => {store.dispatch(changeLocale(locale))}}
            locale="en"
          />
        </IntlProvider>
      </Provider>
    );
  };

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

    it('renders <AppBar /> correctly', () => {
      const component = mountComponent();

      expect(component.find(AppBar).length).to.equal(1);
    });

    it('renders <Toolbar /> correctly', () => {
      const component = mountComponent();

      expect(component.find(Toolbar).length).to.equal(1);
    });

    it('renders <SVGNovaBecherLogo /> correctly', () => {
      const component = mountComponent();

      expect(component.find(SVGNovaBecherLogo).length).to.equal(1);
    });

    it('renders <Typography /> correctly with no texts', () => {
      const component = mountComponent();

      expect(component.find(Typography).length).to.equal(1);
      expect(component.find(Typography).text()).to.equal('');
    });

    it('renders <IconButton /> correctly with one <i /> from fontawesome', () => {
      const component = mountComponent();

      expect(component.find(IconButton).length).to.equal(1);
      expect(component.find(IconButton).at(0).find('i').hasClass('fal fa-ellipsis-v')).to.equal(true);
    });

    it('renders <Menu /> correctly with on <MenuItem /> for locale', () => {
      const component = mountComponent();

      expect(component.find(Menu).length).to.equal(1);
      component.find(IconButton).simulate('click');
      expect(component.find(Menu).at(0).find(MenuItem).length).to.equal(1);
      expect(component.find(Menu).at(0).find(MenuItem).at(0).find(FormattedMessage).length).to.equal(1);
      expect(component.find(Menu).at(0).find(MenuItem).at(0).find(FormattedMessage).text()).to.equal('Français');
    });

    it('click on first <MenuItem /> to call method AppHeader.handleToggleLocale()', () => {
      const handleToggleLocaleSpy = sinon.spy(AppHeader.prototype, 'handleToggleLocale');
      const component = mountComponent();

      expect(component.find(Menu).length).to.equal(1);
      component.find(IconButton).simulate('click');
      expect(component.find(Menu).at(0).find(MenuItem).length).to.equal(1);
      component.find(Menu).at(0).find(MenuItem).at(0).simulate('click');
      expect(handleToggleLocaleSpy.calledOnce).to.equal(true);

      handleToggleLocaleSpy.restore();
    });

    it('click on logo container to call method AppHeader.handleMainMenuOpen()', () => {
      const handleMainMenuOpenSpy = sinon.spy(AppHeader.prototype, 'handleMainMenuOpen');
      const component = mountComponent();

      expect(component.find('.app-menu--opener').length).to.equal(1);
      component.find('.app-menu--opener').simulate('click');
      expect(handleMainMenuOpenSpy.calledOnce).to.equal(true);

      handleMainMenuOpenSpy.restore();
    });
  });
});