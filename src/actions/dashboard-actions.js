import ACTIONS from '../utils/consts';

export function addWidget(key, widget) {
  return {
    type: ACTIONS.DASHBOARD_ADD_WIDGET,
    key,
    widget,
  };
}

export function changeLayout(layouts) {
  return {
    type: ACTIONS.DASHBOARD_CHANGE_LAYOUTS,
    layouts,
  };
}

export function changeCurrentBreakpoint(breakpoint) {
  return {
    type: ACTIONS.DASHBOARD_CHANGE_CURRENT_BREAKPOINT,
    breakpoint,
  };
}
