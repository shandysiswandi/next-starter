import { ActionTyped } from 'store/typed/ActionTyped';

export const ChangeTheme = (state = 'system', action: ActionTyped) => {
  switch (action.type) {
    case 'THEME_DARK':
      return action.payload?.value;
    case 'THEME_LIGHT':
      return action.payload?.value;
    default:
      return state;
  }
};
