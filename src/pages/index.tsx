import { usePost } from "@/hooks/usePost";

import { Meta } from "@/components/Meta";
import { Content } from "@/components/Content";

export default function Home() {
  const { posts } = usePost();

  return (
    <>
      <Meta title="Página inicial" path="/" />
      <Content posts={posts} />
    </>
  );
}
