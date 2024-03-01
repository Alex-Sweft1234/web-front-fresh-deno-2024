import { JSX } from "preact"

export function NavLink({ href, children }: JSX.HTMLAttributes<HTMLLinkElement>) {
  return (
    <a
      href={href}
      className="bg-transparent data-[current]:underline px-3 py-2 rounded-md text-[18px] font-medium text-white hover:text-tertiary"
    >
      {children}
    </a>
  )
}
