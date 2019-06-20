import { Auth } from '../models/auth';

export interface AuthState {
  auth: Auth;
}

export const initialAuthState: AuthState = {
  auth: null,
};
