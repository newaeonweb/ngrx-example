import { ConfigActionsType, ConfigActions } from '../actions/config.actions';
import { initialConfigState, ConfigState } from '../state/config.state';

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
