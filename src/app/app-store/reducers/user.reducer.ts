import { UserActionsType, UserActions } from '../actions/user.actions';
import { UserState, initialUserState } from '../state/user.state';

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
