import { FormEvent, SetStateAction, useState } from "react";

import Image from "next/image";
import { Post, PostProps } from "../Post";
import { ContentHeaderButton } from "./ContentHeaderButton";

interface ContentProps {
  posts: PostProps[];
  setPosts: (value: SetStateAction<[] | PostProps[]>) => void;
}

const user = {
  image:
    "https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg",
  name: "DKSHS",
  username: "@DK_ShSs",
};

export function Content({ posts, setPosts }: ContentProps) {
  const [currentTab, setCurrentTab] = useState<"For you" | "Following">(
    "For you",
  );
  const [typedPost, setTypedPost] = useState("");

  function handleSubmitPost(e: FormEvent) {
    e.preventDefault();
    const post = { user, content: typedPost };
    if (typedPost.trim().length !== 0) {
      setPosts((prevPosts) => {
        return [...prevPosts, post];
      });
      setTypedPost("");
    }
  }

  return (
    <>
      <div className="border-b border-zinc-700 fixed max-w-[598px] w-full backdrop-blur-lg bg-black/50 z-10">
        <div className="px-4 h-[53px] flex items-center">
          <h2 className="text-xl font-semibold">Página Inicial</h2>
        </div>
        <div className="flex justify-between">
          <ContentHeaderButton
            text="Para você"
            variant={currentTab === "For you" ? "activated" : "deactivated"}
            onClick={() => setCurrentTab("For you")}
          />
          <ContentHeaderButton
            text="Seguindo"
            variant={currentTab === "Following" ? "activated" : "deactivated"}
            onClick={() => setCurrentTab("Following")}
          />
        </div>
      </div>
      <form
        className="flex flex-col pt-28 pb-2 border-b border-zinc-700 px-4"
        onSubmit={handleSubmitPost}
      >
        <label className="flex gap-2" htmlFor="tweet">
          <div className="pt-1 mr-1">
            <Image
              src="https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg"
              alt="logo"
              width={48}
              height={48}
              className="rounded-full w-12 h-12 object-cover aspect-square"
            />
          </div>
          <textarea
            id="tweet"
            className="mt-3 flex-1 resize-none bg-transparent text-lg outline-none"
            placeholder="O que está acontecendo?"
            onChange={(e) => setTypedPost(e.target.value)}
            value={typedPost}
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={typedPost.trim().length === 0}
          className="self-end py-1.5 px-4 rounded-full font-bold bg-sky-500 outline-none shadow-lg shadow-sky-500/20 [&:not(:disabled)]:hover:bg-sky-600 focus-visible:ring ring-blue-300 disabled:opacity-60 disabled:select-none duration-200"
        >
          Tweetar
        </button>
      </form>
      <div>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </>
  );
}
