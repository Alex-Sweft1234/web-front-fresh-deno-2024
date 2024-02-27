import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts"

export function IconButton({ children, disabled, ...props }: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      data-ripple-light="true"
      disabled={disabled || !IS_BROWSER}
      className="relative align-middle select-none transition-all ease-in-out delay-150 rounded-full p-1 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:opacity-[0.85] hover:bg-[#25435d1a]"
    >
      {children}
    </button>
  )
}