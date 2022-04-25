import { useCallback, useState } from "react";
import { User } from "../types/user";

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectUser(targetUser ?? null);
    onOpen();
  }, []);
  return { onSelectUser, selectUser };
};
