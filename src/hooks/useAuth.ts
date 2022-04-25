/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/user";
import { useSetRecoilState } from "recoil";
import { useMessage } from "./useMessage";
import { authState } from "../store/auth_state";

export const useAuth = () => {
  const navigate = useHistory();
  const { showMessage } = useMessage();
  const setLoginUser = useSetRecoilState(authState);
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.data) {
          const isAdmin = response.data.id === 10;
          setLoginUser({ ...response.data, isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          navigate.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() =>
        showMessage({ title: "ログインできません", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { login, loading };
};
