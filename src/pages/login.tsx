/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { PrimaryButton } from "../components/common/primary_button";
import { useAuth } from "../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);

  const onClickLogin = useCallback(() => login(userId), [userId]);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeText}
          />
          <PrimaryButton
            isDisabled={userId === ""}
            isLoading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
