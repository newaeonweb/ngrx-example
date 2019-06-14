import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

const selectUsers = createFeatureSelector<UserState>('user');

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);
