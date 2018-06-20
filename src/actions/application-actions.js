import ACTIONS from '../utils/consts';

export function changeLocale(locale) {
  return {
    type: ACTIONS.APP_CHANGE_LOCALE,
    locale,
  };
}

export function changeMainMenuState(mainMenuState) {
  return {
    type: ACTIONS.APP_CHANGE_MAIN_MENU_STATE,
    mainMenuState,
  };
}
