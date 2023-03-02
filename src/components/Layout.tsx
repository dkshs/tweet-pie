import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

interface LayoutProps extends PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-5xl min-h-screen mx-auto flex mt-4 gap-3">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
