/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../components/user_management/user_card";
import { UserDetailModal } from "../components/user_management/user_detail_modal";
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);
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
              key={item.id}
              imageUrl={`https://source.unsplash.com/random/${item.id}`}
              userName={item.username}
              fullName={item.name}
              onClick={onClickUser}
            />
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
