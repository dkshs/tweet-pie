import { useRouter } from "next/router";

import { navItems } from "./NavItems";

import Link from "next/link";
import { Logo } from "../Logo";
import { TweetButton } from "./TweetButton";

import { DotsThreeCircle } from "@phosphor-icons/react";

export function Sidebar() {
  const router = useRouter();

  return (
    <header className="hidden px-1 sm:px-3 h-full w-[74px] xl:w-[274px] fixed z-10 xs:flex flex-col items-end xl:inline">
      <Link
        href={"/"}
        className="flex max-w-min rounded-full mt-1 mb-2 p-3 hover:bg-blue-600/20 outline-none focus-visible:bg-blue-600/20 focus-visible:ring-2 ring-blue-300 duration-200"
      >
        <Logo size={30} />
      </Link>
      <nav className="flex flex-col gap-2">
        {navItems.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="flex items-center text-xl group outline-none"
          >
            <div className="flex items-center py-3 px-3 rounded-full group-hover:bg-gray-500/20 group-focus-visible:ring-2 ring-white duration-200">
              <link.icon
                size={26}
                weight={router.pathname === link.href ? "fill" : "bold"}
              />
              <span
                className={`ml-5 mr-4 hidden xl:inline ${
                  router.pathname === link.href && "font-bold"
                }`}
              >
                {link.title}
              </span>
            </div>
          </Link>
        ))}
        <button
          type="button"
          className="flex items-center text-xl group outline-none"
        >
          <div className="flex items-center py-3 px-3 rounded-full group-hover:bg-gray-500/20 group-focus-visible:ring-2 ring-white duration-200">
            <DotsThreeCircle size={26} />
            <span className="ml-5 mr-4 hidden xl:inline">Mais</span>
          </div>
        </button>
      </nav>
      <TweetButton />
    </header>
  );
}
