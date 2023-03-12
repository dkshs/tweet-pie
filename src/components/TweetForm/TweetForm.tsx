import { usePost } from "@/hooks/usePost";

import { FormEvent, useState } from "react";

import Image from "next/image";
import { useUser } from "@/hooks/useUser";

interface TweetFormProps {
  className?: string;
  setModalState?: (value: boolean) => void;
}

export function TweetForm({ className, setModalState }: TweetFormProps) {
  const [typedPost, setTypedPost] = useState("");
  const { setPosts } = usePost();
  const { user } = useUser();

  function randomNumber() {
    const random = Math.random() * 100;
    const arrayRandom = random.toString().split(".");
    return arrayRandom.join("");
  }

  function handleSubmitPost(e: FormEvent) {
    e.preventDefault();
    if (typedPost.trim().length !== 0) {
      if (user) {
        const post = { id: randomNumber(), user, content: typedPost };
        setPosts((prevPosts) => {
          return [...prevPosts, post];
        });
        setTypedPost("");
        setModalState && setModalState(false);
      } else {
        alert("User not found!");
      }
    }
  }

  return (
    <form
      className={`flex flex-col pb-2 border-b border-zinc-700 px-4 ${className}`}
      onSubmit={handleSubmitPost}
    >
      <label className="flex gap-2" htmlFor="tweet">
        <div className="pt-1 mr-1">
          <Image
            src={user?.image || ""}
            alt="logo"
            width={48}
            height={48}
            className="rounded-full w-12 h-12 object-cover aspect-square"
          />
        </div>
        <textarea
          id="tweet"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={setModalState && true}
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
