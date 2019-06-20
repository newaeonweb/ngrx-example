import { Action } from '@ngrx/store';
import { Auth } from '../models/auth';

export enum AuthActionsType {
  GetAuth = '[Auth] Get Auth',
  GetAuthSuccess = '[Auth] Get Auth Success',
}

export class GetAuth implements Action {
  public readonly type = AuthActionsType.GetAuth;
  constructor(public payload: { email: string; password: string }) {}
}

export class GetAuthSuccess implements Action {
  public readonly type = AuthActionsType.GetAuthSuccess;
  constructor(public payload: Auth) {}
}

export type AuthActions = GetAuth | GetAuthSuccess;
