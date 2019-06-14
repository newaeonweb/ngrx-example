import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UserState } from '../state/user.state';

const selectUsers = (state: AppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);
