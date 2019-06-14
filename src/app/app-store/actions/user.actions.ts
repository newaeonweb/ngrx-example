import { Action } from '@ngrx/store';
import { User } from '../../pages/user/models/user';

export enum UserActionsType {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
  public readonly type = UserActionsType.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = UserActionsType.GetUsersSuccess;
  constructor(public payload: User[]) {}
}

export class GetUser implements Action {
  public readonly type = UserActionsType.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = UserActionsType.GetUserSuccess;
  constructor(public payload: User) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
