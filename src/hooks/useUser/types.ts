import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  username: string;
  password: string;
}
export interface CustomTokenPayload extends JwtPayload {
  username: string;
}
