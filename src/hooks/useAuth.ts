/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/user";

export const useAuth = () => {
  const navigate = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const login = useCallback((id: string) => {
    setIsLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.data) {
          navigate.push("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => alert("ログインできません"))
      .finally(() => setIsLoading(false));
  }, []);

  return { login, isLoading };
};
