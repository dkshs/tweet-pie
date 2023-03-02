import { navItems } from "./NavItems";

import Link from "next/link";

import { BsTwitter } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

export function Sidebar() {
  return (
    <header className="px-3 border-r border-gray-700 w-72">
      <Link
        href={"/"}
        className="flex max-w-min rounded-full mb-2 p-3 hover:bg-blue-600/20 outline-none focus-visible:bg-blue-600/20 focus-visible:ring-2 ring-blue-300 duration-200"
      >
        <BsTwitter size={32} />
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
    </header>
  );
}
