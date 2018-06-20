import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import CssBaseline from 'material-ui/CssBaseline';

import AppHeader from '../components/sections/AppHeader';
import AppMenu from '../components/sections/AppMenu';

import '../assets/scss/wrapper/Layout.scss';

function Layout(props) {
  const {
    dispatch,
    children,
    title,
    changeLocale,
    locale,
  } = props;

  return (
    <CssBaseline>
      <Head>
        <title>{ title }</title>
      </Head>
      <div id="layout">
        <AppHeader changeLocale={changeLocale} locale={locale} dispatch={dispatch} />
        <AppMenu />
        { children }
      </div>
    </CssBaseline>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  dispatch: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Novalab Dashboard',
};

export default Layout;
