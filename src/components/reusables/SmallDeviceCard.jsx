import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import '../../assets/scss/components/reusables/SmallDeviceCard.scss';

function SmallDeviceCard(props) {
  const { deviceIconClassName, deviceName, className } = props;

  return (
    <Paper elevation={4} className={`small-device-card ${className}`}>
      <i className={`device-icon ${deviceIconClassName}`} />
      <Typography noWrap className="text padded-8">
        {deviceName}
      </Typography>
      <i className="grabber fal fa-bars" />
    </Paper>
  );
}

SmallDeviceCard.propTypes = {
  className: PropTypes.string,
  deviceName: PropTypes.string.isRequired,
  deviceIconClassName: PropTypes.string.isRequired,
};

SmallDeviceCard.defaultProps = {
  className: '',
};

export default SmallDeviceCard;
