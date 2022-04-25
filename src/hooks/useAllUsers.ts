import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading, users };
};
