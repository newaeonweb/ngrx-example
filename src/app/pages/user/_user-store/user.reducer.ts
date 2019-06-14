import { UserActionsType, UserActions } from './user.actions';
import { UserState, initialUserState } from './user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionsType.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case UserActionsType.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }

    default:
      return state;
  }
};
