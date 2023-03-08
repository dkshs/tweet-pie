import Image from "next/image";
import { Meta } from "@/components/Meta";

import { Post, PostProps } from "@/components/Post";

const user = {
  image:
    "https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg",
  name: "DKSHS",
  username: "@DK_ShSs",
};

const posts: PostProps[] = [
  {
    user,
    content:
      "Volutpat sollicitudin lectus vivamus sodales suscipit viverra non nisl interdum vinar in, libero maecenas duis mauris accumsan aliquam taciti morbi fames cubilia, class litora vivamus pretium suscipit commodo lacinia aenean scelerisque. Torquent dapibus augue ornare neque phasellus ad lacus duis ultricies sem volutpat facilisi, felis nunc tristique tellus ultrices metus sagittis elementum lacinia proin.",
  },
  {
    user,
    content:
      "Volutpat sollicitudintis sociosqu faucibus dui ac sociis dictumst eu, malesuada tristique a condimentum eleifend commodo imperdiet consequat lacinia. Malesuada massa aliquet montes magna sodales gravida per quis pulvinar in, libero maecenas duis mauris accumsan aliquam taciti morbi fames cubilia, class litora vivamus pretium suscipit commodo lacinia aenean scelerisque. Torquent dapibus augue ornare neque phasellus ad lacus duis ultricies sem volutpat facilisi, felis nunc tristique tellus ultrices metus sagittis elementum lacinia proin.",
  },
  {
    user,
    content:
      "Volutpat sollicitudin lectus sociosqu faucibus dui ac sociis dictumst eu, malesuada tristique a condimentum eleifend commodo imperdiet consequat lacinia. Malesuada massa aliquet montes magna sodales gravida per quis pulvinar in, libero maecenas duis mauris accumsan aliquam taciti morbi fames cubilia, class litora vivamus pretium suscipit commodo lacinia aenean scelerisque. Torquent dapibus augue ornare neque phasellus ad lacus duis ultricies sem volutpat facilisi, felis nunc tristique tellus ultrices metus sagittis elementum lacinia proin.",
  },
  {
    user,
    content:
      "Volutpat sollicitudin lectus vivamus sodales suscipit viverra non nisl interdum eget, varius fringilla enim sagittis sociosqu faucibus dui ac sociis dictumst eu, malesuada tristique a condimentum eleifend commodo imperdiet consequat lacinia. Malesuada massa aliquet montes magna sodales gravida per quis pulvinar in, libero maecenas duis mauris accumsan aliquam taciti morbi fames cubilia, class litora vivamus pretium suscipit commodo lacinia aenean scelerisque. Torquent dapibus augue ornare neque phasellus ad lacus duis ultricies sem volutpat facilisi, felis nunc tristique tellus ultrices metus sagittis elementum lacinia proin.",
  },
];

export default function Home() {
  return (
    <>
      <Meta title="Página inicial" path="/" />
      <div className="border-b border-zinc-700 fixed max-w-[598px] w-full backdrop-blur-lg bg-black/50 z-10">
        <div className="px-4 h-[53px] flex items-center">
          <h2 className="text-xl font-semibold">Página Inicial</h2>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="flex justify-center items-center px-4 h-[53px] w-full outline-none hover:bg-gray-500/20 focus-visible:bg-gray-500/20 focus-visible:ring-2 ring-white duration-200"
          >
            <div className="max-w-fit font-semibold py-3.5 relative">
              <span>Para você</span>
              <div className="bg-sky-500 h-1 rounded-full absolute w-full bottom-0"></div>
            </div>
          </button>
          <button
            type="button"
            className="flex justify-center items-center px-4 h-[53px] w-full outline-none hover:bg-gray-500/20 focus-visible:bg-gray-500/20 focus-visible:ring-2 ring-white duration-200"
          >
            <div className="max-w-fit text-white/50 py-3.5 relative">
              <span>Seguindo</span>
              {/* <div className="bg-sky-500 h-1 rounded-full absolute w-full bottom-0"></div> */}
            </div>
          </button>
        </div>
      </div>
      <form
        className="flex flex-col pt-28 pb-2 border-b border-zinc-700 px-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="flex gap-2" htmlFor="tweet">
          <div className="pt-1 mr-1">
            <Image
              src="https://auywbkryrhcmqbtmpqrj.supabase.co/storage/v1/object/public/spotlie/snowfall/cover.jpg"
              alt="logo"
              width={48}
              height={48}
              className="rounded-full w-12 h-12 object-cover aspect-square"
            />
          </div>
          <textarea
            id="tweet"
            className="mt-3 flex-1 resize-none bg-transparent text-lg outline-none"
            placeholder="O que está acontecendo?"
          ></textarea>
        </label>
        <button
          type="submit"
          className="self-end py-1.5 px-4 rounded-full font-bold bg-sky-500 outline-none shadow-lg shadow-sky-500/20 hover:bg-sky-600 focus-visible:ring ring-blue-300 duration-200"
        >
          Tweetar
        </button>
      </form>
      <div>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </>
  );
}
