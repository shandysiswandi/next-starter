import { ReduxAction } from 'src/Interfaces/ReduxAction';
import { ActionConstant } from 'src/Config/ActionConstant';

export const HomeReducer = (state = 'system', action: ReduxAction<string>) => {
  switch (action.type) {
    case ActionConstant.HomeDark:
      return action.payload;
    case ActionConstant.HomeLight:
      return action.payload;
    default:
      return state;
  }
};
