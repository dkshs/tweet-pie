import { type PropsWithChildren } from "react";

import { Sidebar } from "./Sidebar";
import { TweetButton } from "./Sidebar/TweetButton";

interface LayoutProps extends PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex md:px-2">
      <Sidebar />
      <main className="pb-32 xs:ml-[78px] xl:ml-[274px] max-w-[600px] w-full border-x border-zinc-700">
        {children}
      </main>
      <div className="fixed xs:hidden bottom-0 right-4">
        <TweetButton />
      </div>
    </div>
  );
}
