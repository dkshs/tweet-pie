import { type PropsWithChildren } from "react";

import { Sidebar } from "./Sidebar";

interface LayoutProps extends PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex">
      <Sidebar />
      <main className="pb-32 ml-[274px] max-w-[600px] w-full border-x border-zinc-700">
        {children}
      </main>
    </div>
  );
}
