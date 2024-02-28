import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function NavLink({ href, children, disabled }: JSX.HTMLAttributes<HTMLLinkElement>) {
  return (
    <a
      href={href}
      disabled={IS_BROWSER || disabled}
      className="bg-transparent data-[current]:underline px-3 py-2 rounded-md text-[18px] font-medium text-white hover:text-red"
    >
      {children}
    </a>
  )
}
