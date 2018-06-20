import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withRedux from 'next-redux-wrapper';

import WithIntl from '../wrapper/WithIntl';
import Layout from '../wrapper/Layout';

import { widgetsPropTypes, layoutPropTypes } from '../utils/propTypesDefs';

import makeStore from '../utils/store';

class Index extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const {
      locale,
      dispatch,
      widgets,
      currentBreakpoint,
      layouts,
    } = this.props;

    return (
      <Layout changeLocale={this.props.changeLocale} locale={locale} dispatch={dispatch}>
        test
      </Layout>
    );
  }
}

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  widgets: widgetsPropTypes.isRequired,
  layouts: PropTypes.shape({
    lg: layoutPropTypes,
    md: layoutPropTypes,
    sm: layoutPropTypes,
    xs: layoutPropTypes,
  }).isRequired,
  currentBreakpoint: PropTypes.string.isRequired,
};

Index.defaultProps = {};

export default withRedux(makeStore, state => ({
  locale: state.application.locale,
  widgets: state.dashboard.widgets,
  layouts: state.dashboard.layouts,
  currentBreakpoint: state.dashboard.currentBreakpoint,
}), dispatch => ({ dispatch }))(WithIntl(Index));
