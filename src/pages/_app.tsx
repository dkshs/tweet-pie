import "@/styles/globals.css";
import { UserContextProvider } from "@/context/UserContext";
import { PostContextProvider } from "@/context/PostContext";

import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostContextProvider>
    </UserContextProvider>
  );
}
