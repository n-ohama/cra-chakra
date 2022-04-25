import { atom } from "recoil";
import { User } from "../types/user";

export const allUsersState = atom<User[]>({
  key: "allUsersState",
  default: [],
});
