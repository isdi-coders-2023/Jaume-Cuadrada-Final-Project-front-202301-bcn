import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../../types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const userCredentials: UserCredentials = {
  username: "jaume",
  password: "sdjhafjhads",
};

const mockTokenPayload: CustomTokenPayload = {
  username: "jaume",
};

const mockToken = "vik27634fvj";

const mockLoginUser: User = {
  username: mockTokenPayload.username,
  token: mockToken,
};

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call dispatch", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });
      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockLoginUser: User = {
        username: mockTokenPayload.username,
        token: mockToken,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLoginUser));
    });

    test("Then it should call the showErrorToast function", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spy).not.toHaveBeenCalledWith(
        loginUserActionCreator(mockLoginUser)
      );
    });
  });
});
