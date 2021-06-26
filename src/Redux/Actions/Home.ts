import { ReduxAction } from 'src/Interfaces';
import { ActionConstant } from 'src/Config/ActionConstant';

export const HomeDarkAction = (): ReduxAction<string> => ({
  type: ActionConstant.HomeDark,
  payload: 'dark',
});

export const HomeLightAction = (): ReduxAction<string> => ({
  type: ActionConstant.HomeLight,
  payload: 'light',
});
