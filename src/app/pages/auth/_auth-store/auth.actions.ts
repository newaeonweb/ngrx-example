import { Action } from '@ngrx/store';
import { Auth } from '../models/auth';
import { AuthState } from './auth.state';

export enum AuthActionsType {
  GetAuth = '[Auth] Get Auth',
  GetAuthSuccess = '[Auth] Get Auth Success',
  LogOut = '[Auth] Logout Auth',
}

export class GetAuth implements Action {
  public readonly type = AuthActionsType.GetAuth;
  constructor(public payload: { email: string; password: string }) {}
}

export class GetAuthSuccess implements Action {
  public readonly type = AuthActionsType.GetAuthSuccess;
  constructor(public payload: AuthState['user']) {}
}

export class LogOut implements Action {
  readonly type = AuthActionsType.LogOut;
  constructor() {}
}

export type AuthActions = GetAuth | GetAuthSuccess | LogOut;
