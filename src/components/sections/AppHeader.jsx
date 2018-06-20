import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import SVGNovaBecherLogo from '../svg/NovaBecherLogo';

import { changeMainMenuState } from '../../actions/application-actions';

import '../../assets/scss/components/section/AppHeader.scss';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      utilsMenu: null,
    };

    this.handleUtilsMenuOpen = this.handleUtilsMenuOpen.bind(this);
    this.handleUtilsMenuClose = this.handleUtilsMenuClose.bind(this);
    this.handleToggleLocale = this.handleToggleLocale.bind(this);
    this.handleMainMenuOpen = this.handleMainMenuOpen.bind(this);
  }

  handleUtilsMenuOpen(event) {
    this.setState({
      utilsMenu: event.currentTarget,
    });
  }

  handleUtilsMenuClose() {
    this.setState({
      utilsMenu: null,
    });
  }

  handleToggleLocale() {
    const { locale, changeLocale } = this.props;
    const newLocale = (locale === 'en') ? 'fr' : 'en';

    changeLocale(newLocale);
    this.handleUtilsMenuClose();
  }

  handleMainMenuOpen() {
    const { dispatch } = this.props;

    dispatch(changeMainMenuState(true));
  }

  render() {
    const { utilsMenu } = this.state;
    const utilsOpen = Boolean(utilsMenu);

    return (
      <AppBar position="static" id="app-header">
        <Toolbar>
          <div className="app-menu--opener" onClick={this.handleMainMenuOpen} role="presentation">
            <SVGNovaBecherLogo />
          </div>
          <Typography variant="title" color="inherit" className="title-bar" />
          <div>
            <IconButton
              className="utils-button"
              aria-owns={utilsOpen ? 'utils-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleUtilsMenuOpen}
              color="inherit"
            >
              <i className="fal fa-ellipsis-v" />
            </IconButton>
            <Menu
              id="utils-appbar"
              anchorEl={utilsMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={utilsOpen}
              onClose={this.handleUtilsMenuClose}
            >
              <MenuItem onClick={this.handleToggleLocale} className="locale--toggle">
                <FormattedMessage id="change-lang" defaultMessage="Français" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default AppHeader;
