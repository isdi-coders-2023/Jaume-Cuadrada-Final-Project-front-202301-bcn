import decodeToken from "jwt-decode";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { LoginResponse, UserCredentials, CustomTokenPayload } from "./types";

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
          method: "POS",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, username } = tokenPayload;

      const userLogin: User = {
        id,
        token,
        username,
      };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch (error) {}
  };
  return { loginUser };
};

export default useUser;
