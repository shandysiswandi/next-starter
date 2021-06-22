import { ActionTyped } from 'store/typed/ActionTyped';

export const themeToDark = (): ActionTyped => ({
  type: 'THEME_DARK',
  payload: {
    value: 'dark',
    description: 'this action use to change theme to dark',
  },
});

export const themeToLight = (): ActionTyped => ({
  type: 'THEME_LIGHT',
  payload: {
    value: 'light',
    description: 'this action use to change theme to light',
  },
});
