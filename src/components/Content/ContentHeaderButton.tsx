import type { HTMLProps } from "react";

interface ContentHeaderButtonProps extends HTMLProps<HTMLButtonElement> {
  variant: "activated" | "deactivated";
  text: string;
}

export function ContentHeaderButton({
  variant = "deactivated",
  text,
  className,
  ...props
}: ContentHeaderButtonProps) {
  return (
    <button
      className={`flex justify-center items-center px-4 h-[53px] w-full outline-none hover:bg-gray-500/20 focus-visible:bg-gray-500/20 focus-visible:ring-2 ring-white duration-200 ${className}`}
      {...props}
      type="button"
    >
      <div
        className={`max-w-fit py-3.5 relative ${
          variant === "activated" ? "font-semibold" : "text-white/50"
        }`}
      >
        <span>{text}</span>
        {variant === "activated" && (
          <div className="bg-sky-500 h-1 rounded-full absolute w-full bottom-0"></div>
        )}
      </div>
    </button>
  );
}
