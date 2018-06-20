import ACTIONS from '../utils/consts';

const initialState = {
  locale: 'en',
  mainMenuIsOpen: false,
};

export default function application(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.APP_CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };

    case ACTIONS.APP_CHANGE_MAIN_MENU_STATE:
      return {
        ...state,
        mainMenuIsOpen: action.mainMenuState,
      };

    default:
      return state;
  }
}
