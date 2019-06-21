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
        isAuthenticated: true,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
        errorMessage: null,
      };
    }

    case AuthActionsType.GetAuthFail: {
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    }

    case AuthActionsType.LogOut: {
      return initialAuthState;
    }

    default:
      return state;
  }
};
