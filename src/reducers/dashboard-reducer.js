import ACTIONS from '../utils/consts';

const initialState = {
  accepts: [],
  lastDroppedItem: null,
  widgets: {},
  currentBreakpoint: 'lg',
  layouts: {},
};

export default function dashboard(state = initialState, action = {}) {
  const currentWidgets = state.widgets;
  const newWidget = {};

  switch (action.type) {
    case ACTIONS.DASHBOARD_ADD_WIDGET:
      newWidget[action.key] = action.widget;

      return {
        ...state,
        widgets: {
          ...currentWidgets,
          ...newWidget,
        },
      };

    case ACTIONS.DASHBOARD_CHANGE_LAYOUTS:
      return {
        ...state,
        layouts: action.layouts,
      };

    case ACTIONS.DASHBOARD_CHANGE_CURRENT_BREAKPOINT:
      return {
        ...state,
        currentBreakpoint: action.breakpoint,
      };

    default:
      return state;
  }
}
