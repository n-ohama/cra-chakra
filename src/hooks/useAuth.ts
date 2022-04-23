/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useHistory();
  const { showMessage } = useMessage();
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((id: string) => {
    setIsLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.data) {
          showMessage({ title: "ログインしました", status: "success" });
          navigate.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() =>
        showMessage({ title: "ログインできません", status: "error" })
      )
      .finally(() => setIsLoading(false));
  }, []);

  return { login, isLoading };
};
