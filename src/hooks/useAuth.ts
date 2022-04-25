/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

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
      .finally(() => setLoading(false));
  }, []);

  return { login, loading };
};
