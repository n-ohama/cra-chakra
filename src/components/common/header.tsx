import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuDrawer } from "../header/menu_drawer";
import { MenuIconButton } from "../header/menu_icon_button";

export const Header: FC = memo(() => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const navigate = useHistory();
  const goHome = useCallback(() => navigate.push("/home"), []);
  const goUserManagement = useCallback(
    () => navigate.push("/home/user_management"),
    []
  );
  const goSetting = useCallback(() => navigate.push("/home/setting"), []);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={goHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={goUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={goSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        goHome={goHome}
        goSetting={goSetting}
        goUserManagement={goUserManagement}
      />
    </>
  );
});
