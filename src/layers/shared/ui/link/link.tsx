import { JSX } from "preact"

export function Link({ href, children }: JSX.HTMLAttributes<HTMLLinkElement>) {
  return (
    <a
      href={href}
      className="bg-transparent px-3 py-2 rounded-md text-[18px] font-medium text-primary hover:text-tertiary"
    >
      {children}
    </a>
  )
}