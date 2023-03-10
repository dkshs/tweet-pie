import { useContext } from "react";
import { PostContext } from "@/context/PostContext";

export function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) {
    console.warn("PostContext is undefined in usePost()");
    throw new Error(`usePost must be used within a PostContextProvider.`);
  }
  return context;
}
