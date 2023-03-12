import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    console.warn("UserContext is undefined in useUser()");
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
}
