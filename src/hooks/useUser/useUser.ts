import { useAppDispatch } from "../../store/hooks";

import decodeToken from "jwt-decode";
import { LoginResponse, User } from "../../../types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { CustomTokenPayload, UserCredentials } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API;
  const usersEndPoint = "/users";
  const loginEndPoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndPoint}${loginEndPoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username } = tokenPayload;

      const userLogin: User = {
        username,
        token,
      };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch (error) {}
  };
  return { loginUser };
};

export default useUser;
