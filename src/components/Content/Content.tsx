import { useState } from "react";
import type { PostProps } from "@/utils/types";

import { Post } from "../Post";
import { ContentHeaderButton } from "./ContentHeaderButton";
import { TweetForm } from "../TweetForm";

interface ContentProps {
  posts: PostProps[];
}

export function Content({ posts }: ContentProps) {
  const [currentTab, setCurrentTab] = useState<"For you" | "Following">(
    "For you",
  );

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
      <div className="mt-28" />
      <TweetForm />
      <div>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </>
  );
}
