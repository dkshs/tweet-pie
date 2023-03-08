import { useState } from "react";

import type { PostProps } from "@/utils/types";

import { Meta } from "@/components/Meta";
import { Content } from "@/components/Content";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[] | []>([]);

  return (
    <>
      <Meta title="Página inicial" path="/" />
      <Content posts={posts} setPosts={setPosts} />
    </>
  );
}
