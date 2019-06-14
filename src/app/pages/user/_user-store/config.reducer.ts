import { ConfigActionsType, ConfigActions } from './config.actions';
import { initialConfigState, ConfigState } from './config.state';

export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
): ConfigState => {
  switch (action.type) {
    case ConfigActionsType.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload,
      };
    }

    default:
      return state;
  }
};
