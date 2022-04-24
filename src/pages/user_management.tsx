import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { UserCard } from "../components/user_management/user_card";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <UserCard
        imageUrl="https://source.unsplash.com/random"
        userName="アイウエオ"
        fullName="かきくけこ"
      />
    </Wrap>
  );
});
