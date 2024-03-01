import { JSX } from "preact"

export function Link({ className, ...props }: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={`bg-transparent px-3 py-2 rounded-md text-[18px] font-medium text-primary hover:text-tertiary ${className ?? ""}`}
    />
  )
}