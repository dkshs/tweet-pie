import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePost } from "@/hooks/usePost";

import type { PostProps } from "@/utils/types";

import Head from "next/head";
import Link from "next/link";
import { Meta } from "@/components/Meta";

export default function PostPage() {
  const [post, setPost] = useState<PostProps | null>(null);
  const router = useRouter();
  const { posts } = usePost();

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === router.query.id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [posts, router, router.query.id]);

  return post ? (
    <>
      <Meta
        path={`/status/${post.id}`}
        title={`${post.user.name} no TweetPie: ${post.content}`}
      />
      <h1>{post.content}</h1>
    </>
  ) : (
    <>
      <Head>
        <title>Post Não Encontrado Ou Excluído!</title>
      </Head>
      <div className="flex flex-col items-center text-center mt-28 gap-1">
        <h1 className="text-xl">Post não encontrado ou excluído!</h1>
        <Link
          href="/"
          className="underline px-2 font-medium hover:text-sky-500 w-fit outline-none focus-visible:text-sky-500 focus-visible:ring-2 ring-blue-300 duration-200"
        >
          Voltar para o início
        </Link>
      </div>
    </>
  );
}
