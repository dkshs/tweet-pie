import "@/styles/globals.css";
import { PostContextProvider } from "@/context/PostContext";

import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostContextProvider>
  );
}
