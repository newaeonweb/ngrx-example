import { User } from '../../auth/models/user';

export interface Auth {
  adminName: string;
  isAuthenticated: boolean;
  user: User | null;
  permission?: string[];
  errorMessage?: string | null;
}
