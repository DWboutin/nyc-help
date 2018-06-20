import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import SmallDeviceCard from '../reusables/SmallDeviceCard';

import { changeMainMenuState } from '../../actions/application-actions';

import '../../assets/scss/components/section/AppMenu.scss';

class AppMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleBeingDrag = this.handleBeingDrag.bind(this);
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
  }

  handleCloseDrawer() {
    const { dispatch } = this.props;

    dispatch(changeMainMenuState(false));
  }

  handleBeingDrag() {
    this.handleCloseDrawer();
  }

  render() {
    const { mainMenuIsOpen } = this.props;

    const dragItem = {
      id: 'abc123',
      name: 'test123',
      type: 'test',
      icon: 'far fa-microchip',
      grid: {
        x: 0,
        y: 0,
        w: 2,
        h: 3,
        i: '1',
        minW: 2,
        minH: 3,
        static: false,
      },
    };

    return (
      <Drawer
        id="app-menu"
        anchor="left"
        open={mainMenuIsOpen}
        onClose={this.handleCloseDrawer}
        PaperProps={{ className: 'container' }}
      >
        <Grid
          container
          className="header"
          tabIndex={0}
          justify="flex-end"
        >
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="headline" className="title padded-8" noWrap>
              <FormattedMessage id="your-menu" defaultMessage="Your menu" />
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <IconButton
              className="button--close"
              onClick={this.handleCloseDrawer}
              color="inherit"
              disableRipple
            >
              <i className="far fa-times" />
            </IconButton>
          </Grid>
        </Grid>
        <div className="list padded-8">
          <SmallDeviceCard className="item" deviceIconClassName="far fa-microchip" deviceName="Menu 1" />
          <SmallDeviceCard className="item" deviceIconClassName="far fa-thermometer-three-quarters" deviceName="Menu 2" />
        </div>
      </Drawer>
    );
  }
}

AppMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mainMenuIsOpen: PropTypes.bool.isRequired,
};

export default connect(state => ({
  mainMenuIsOpen: state.application.mainMenuIsOpen,
}))(AppMenu);
