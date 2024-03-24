export type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: string) => void;
  logout: () => void;
};
