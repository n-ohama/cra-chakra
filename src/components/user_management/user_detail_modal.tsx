/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";
import { User } from "../../types/user";
import { PrimaryButton } from "../common/primary_button";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;
  const onClickUpdate = useCallback(() => {}, []);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const changeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const changeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  isReadOnly={!isAdmin}
                  onChange={changeUserName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  isReadOnly={!isAdmin}
                  onChange={changeName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={changeEmail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onChange={changePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
