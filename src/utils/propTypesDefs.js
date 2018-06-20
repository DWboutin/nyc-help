import PropTypes from 'prop-types';

export const widgetsPropTypes = PropTypes.objectOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  grid: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
  }).isRequired,
}));

export const layoutPropTypes = PropTypes.arrayOf(PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  i: PropTypes.string.isRequired,
  moved: PropTypes.bool.isRequired,
  static: PropTypes.bool.isRequired,
}));

export const responsiveColsPropTypes = PropTypes.shape({
  xlg: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
});
