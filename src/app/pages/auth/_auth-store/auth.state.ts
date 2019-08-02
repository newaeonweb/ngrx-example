import { Auth } from '../models/auth';
import { User } from '../models/user';

export interface AuthState {
  adminName: string;
  isAuthenticated: boolean;
  user: User | null;
  permission?: string[];
  errorMessage?: string | null;
}

export const initialAuthState: AuthState = {
  adminName: null,
  isAuthenticated: false,
  user: null,
  permission: null,
  errorMessage: null,
};
