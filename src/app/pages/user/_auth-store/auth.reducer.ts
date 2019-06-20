import { AuthActionsType, AuthActions } from './auth.actions';
import { initialAuthState, AuthState } from './auth.state';

export const authReducers = (
  state = initialAuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AuthActionsType.GetAuthSuccess: {
      return {
        ...state,
        auth: action.payload,
      };
    }

    default:
      return state;
  }
};
