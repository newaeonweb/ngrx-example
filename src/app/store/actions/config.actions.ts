import { Action } from '@ngrx/store';
import { Config } from '../../pages/user/models/config';

export enum ConfigActionsType {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = ConfigActionsType.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionsType.GetConfigSuccess;
  constructor(public payload: Config) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
