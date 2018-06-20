import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import '../../assets/scss/components/reusables/WidgetCard.scss';

function WidgetCard(props) {
  const { icon, name, className } = props;

  return (
    <Paper elevation={2} className={`widgetCard ${className}`}>
      <div className="header">
        <i className={`icon ${icon}`} />
        <Typography noWrap className="title padded-8">{name}</Typography>
        <div className="options">
          <i className="far fa-link" />
          <Button size="small">
            <i className="far fa-cog" />
          </Button>
        </div>
      </div>
    </Paper>
  );
}

WidgetCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

WidgetCard.defaultProps = {
  className: '',
};

export default WidgetCard;
