import { navItems } from "./NavItems";

import Link from "next/link";

import { BsTwitter } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

export function Sidebar() {
  return (
    <header className="px-3 w-[274px] fixed z-10">
      <Link
        href={"/"}
        className="flex max-w-min rounded-full mt-1 mb-2 p-3 hover:bg-blue-600/20 outline-none focus-visible:bg-blue-600/20 focus-visible:ring-2 ring-blue-300 duration-200"
      >
        <BsTwitter size={30} />
      </Link>
      <nav className="flex flex-col gap-2">
        {navItems.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="flex items-center text-xl group outline-none"
          >
            <div className="flex items-center py-3 px-4 rounded-full group-hover:bg-gray-500/20 group-focus-visible:ring-2 ring-white duration-200">
              <link.icon size={26} />
              <span className="ml-5 mr-4">{link.title}</span>
            </div>
          </Link>
        ))}
        <button
          type="button"
          className="flex items-center text-xl group outline-none"
        >
          <div className="flex items-center py-3 px-4 rounded-full group-hover:bg-gray-500/20 group-focus-visible:ring-2 ring-white duration-200">
            <CgMoreO size={26} /> <span className="ml-5 mr-4">Mais</span>
          </div>
        </button>
      </nav>
      <div className="my-4 w-[90%]">
        <button
          type="button"
          className="py-3 px-8 rounded-full font-bold text-lg bg-sky-500 w-full outline-none shadow-lg shadow-sky-500/20 hover:bg-sky-600 focus-visible:ring ring-blue-300 duration-200"
        >
          Tweetar
        </button>
      </div>
    </header>
  );
}
