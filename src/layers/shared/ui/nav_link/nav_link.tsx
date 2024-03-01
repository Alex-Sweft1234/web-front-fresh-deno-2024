import { JSX } from "preact"

export function NavLink({ className, ...props }: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={`bg-transparent data-[current]:underline px-3 py-2 rounded-md text-[18px] font-medium text-white hover:text-tertiary ${className ?? ""}`}
    />
  )
}
