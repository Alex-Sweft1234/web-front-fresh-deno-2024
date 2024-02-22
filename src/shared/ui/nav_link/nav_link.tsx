import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function NavLink({ href, children, disabled }: JSX.HTMLAttributes<HTMLLinkElement>) {
  return (
    <a href={href} disabled={IS_BROWSER || disabled}>
      {children}
    </a>
  )
}