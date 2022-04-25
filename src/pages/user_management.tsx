import { Center, Spinner, Wrap } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../components/user_management/user_card";
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <UserCard
              key={user.id}
              imageUrl={`https://source.unsplash.com/random/${user.id}`}
              userName={user.username}
              fullName={user.name}
            />
          ))}
        </Wrap>
      )}
    </>
  );
});
