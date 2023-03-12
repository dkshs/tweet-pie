import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

import type { UserProps } from "@/utils/types";

interface UserContextProps {
  user: UserProps | null;
  setUser: (user: SetStateAction<UserProps | null>) => void;
}

const ctxInitialValues: UserContextProps = {
  user: null,
  setUser: (): void => {
    throw new Error("setUser() not implemented.");
  },
};

export const UserContext = createContext<UserContextProps>(ctxInitialValues);

export function UserContextProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<UserProps | null>({
    image:
      "https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg",
    name: "DKSHS",
    username: "@DK_ShSs",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
