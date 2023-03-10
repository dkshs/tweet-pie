import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { TweetForm } from "../TweetForm";

import { X, PencilSimple } from "@phosphor-icons/react";

export function TweetButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="my-4 xl:w-[90%]">
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="p-3 flex items-center justify-center xl:py-3 xl:px-8 rounded-full font-bold text-lg bg-sky-500 w-full outline-none shadow-lg shadow-sky-500/20 hover:bg-sky-600 focus-visible:ring ring-blue-300 duration-200"
          >
            <PencilSimple
              size={24}
              weight="bold"
              className="inline xl:hidden"
            />
            <span className="hidden xl:inline">Tweetar</span>
          </button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-sky-200/20 fixed inset-0 z-20" />
        <Dialog.Content className="z-30 xs:rounded-lg fixed top-0 xs:top-12 left-1/2 -translate-x-1/2 h-full xs:h-auto w-full max-w-[600px] bg-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <div className="h-[53px] xs:rounded-lg flex items-center px-2">
            <Dialog.Close className="flex justify-center items-center border-2 h-9 w-9 border-transparent rounded-full outline-none hover:bg-gray-500/20 active:bg-gray-500/30 focus-visible:border-white duration-200">
              <X size={20} weight="bold" />
            </Dialog.Close>
          </div>
          <TweetForm
            className="pt-0 mt-2 px-4 border-b-transparent xs:rounded-lg"
            setModalState={setOpen}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
