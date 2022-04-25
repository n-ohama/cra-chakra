/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { allUsersState } from "../store/all_users_state";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const setAllUsers = useSetRecoilState(allUsersState);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setAllUsers(response.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading };
};
