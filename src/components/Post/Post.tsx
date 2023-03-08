import type { PostProps } from "@/utils/types";

import Image from "next/image";

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

export function Post({ user, content }: PostProps) {
  return (
    <div className="py-2.5 px-4 flex border-b border-zinc-700">
      <div className="flex w-12 h-12 aspect-square mr-3">
        <Image
          src={user.image}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1">
          <strong>{user.name}</strong>
          <span className="text-white/50 text-sm self-center">
            {user.username}
          </span>
        </div>
        <p>{content}</p>
        <div className="mt-1 py-3 flex gap-3 text-white/50 text-sm">
          <button
            type="button"
            className="flex items-center min-h-[20px] group outline-none"
          >
            <div className="relative flex items-center justify-center">
              <FaRegComment
                size={18}
                className="group-hover:text-sky-600 group-focus-visible:text-sky-600 duration-200"
              />
              <div className="absolute z-[-1] w-10 h-10 rounded-full border-2 border-transparent duration-300 group-hover:bg-sky-500/20 group-focus-visible:bg-sky-500/20 group-focus-visible:border-blue-300 group-active:bg-sky-500/30" />
            </div>
            <span className="pr-3 pl-4 group-hover:text-sky-600 group-focus-visible:text-sky-600 duration-200">
              5.231
            </span>
          </button>
          <button
            type="button"
            className="flex items-center min-h-[20px] group outline-none"
          >
            <div className="relative flex items-center justify-center">
              <AiOutlineRetweet
                size={18}
                className="group-hover:text-green-600 group-focus-visible:text-green-600 duration-200"
              />
              <div className="absolute z-[-1] w-10 h-10 rounded-full border-2 border-transparent duration-300 group-hover:bg-green-500/20 group-focus-visible:bg-green-500/20 group-focus-visible:border-green-300 group-active:bg-green-500/30" />
            </div>
            <span className="pr-3 pl-4 group-hover:text-green-600 group-focus-visible:text-green-600 duration-200">
              5.233
            </span>
          </button>
          <button
            type="button"
            className="flex items-center min-h-[20px] group outline-none"
          >
            <div className="relative flex items-center justify-center">
              <FaRegHeart
                size={18}
                className="group-hover:text-pink-600 group-focus-visible:text-pink-600 duration-200"
              />
              <div className="absolute z-[-1] w-10 h-10 rounded-full border-2 border-transparent duration-300 group-hover:bg-pink-500/20 group-focus-visible:bg-pink-500/20 group-focus-visible:border-pink-300 group-active:bg-pink-500/30" />
            </div>
            <span className="pr-3 pl-4 group-hover:text-pink-600 group-focus-visible:text-pink-600 duration-200">
              1.234
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
