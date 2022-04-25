import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/login_user_provider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
