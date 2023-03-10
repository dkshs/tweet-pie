import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

import type { PostProps } from "@/utils/types";

interface PostContextProps {
  posts: [] | PostProps[];
  setPosts: (posts: SetStateAction<[] | PostProps[]>) => void;
}

const ctxInitialValues: PostContextProps = {
  posts: [],
  setPosts: (): void => {
    throw new Error("setPosts() not implemented.");
  },
};

export const PostContext = createContext<PostContextProps>(ctxInitialValues);

export function PostContextProvider(props: PropsWithChildren) {
  const [posts, setPosts] = useState<PostProps[] | []>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
}
