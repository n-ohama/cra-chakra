import { atom } from "recoil";
import { User } from "../types/user";

type LoginUser = User & { isAdmin: boolean };

export const authState = atom<LoginUser | null>({
  key: "authState",
  default: null,
});
