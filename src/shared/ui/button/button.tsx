import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function Button({ disabled, ...props }: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled || !IS_BROWSER}
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-white text-blue shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
      data-ripple-light="true"
    />
  )
}
