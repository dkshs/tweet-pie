import { usePost } from "@/hooks/usePost";

import { FormEvent, useState } from "react";
import type { UserProps } from "@/utils/types";

import Image from "next/image";

const user: UserProps = {
  image:
    "https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg",
  name: "DKSHS",
  username: "@DK_ShSs",
};

export function TweetForm() {
  const [typedPost, setTypedPost] = useState("");
  const { setPosts } = usePost();

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
  );
}
