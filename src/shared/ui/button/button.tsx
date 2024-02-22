import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function Button({ disabled, ...props }: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled || !IS_BROWSER}
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
      data-ripple-light="true"
    />
  )
}
