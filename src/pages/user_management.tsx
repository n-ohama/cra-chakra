/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../components/user_management/user_card";
import { UserDetailModal } from "../components/user_management/user_detail_modal";
import { useAllUsers } from "../hooks/useAllUsers";
import { useLoginUser } from "../hooks/useLoginUser";
import { useSelectUser } from "../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectUser, onSelectUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => onSelectUser({ id, users, onOpen }),
    [users]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((item) => (
            <UserCard
              id={item.id}
              key={item.id}
              imageUrl={`https://source.unsplash.com/random/${item.id}`}
              userName={item.username}
              fullName={item.name}
              onClick={onClickUser}
            />
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
