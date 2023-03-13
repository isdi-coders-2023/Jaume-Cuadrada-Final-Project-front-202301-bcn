export interface User {
  username: string;
  token: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
