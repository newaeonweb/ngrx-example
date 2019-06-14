import { Config } from '../../pages/user/models/config';

export interface ConfigState {
  config: Config;
}

export const initialConfigState: ConfigState = {
  config: null,
};
