import { JSX } from "preact"
import {TColors} from "../../../types/main.ts";

interface ILinkButton {
  color?: TColors
  bgColor?: TColors
  ripple?: "light" | "dark"
}

export function LinkButton({
  children,
  disabled,
  className,
  ripple = "dark",
  color = "secondary",
  bgColor = "primary",
  ...props
}: JSX.HTMLAttributes<HTMLAnchorElement> & ILinkButton) {
  const text = color === "primary" ? "text-primary" : color === "secondary" ? "text-secondary" : "text-tertiary"
  const bg = bgColor === "primary" ? "bg-primary" : bgColor === "secondary" ? "bg-secondary" : "bg-tertiary"

  return (
    <a {...props}>
      <button
        children={children}
        data-ripple-dark={`${ripple === "dark"}`}
        data-ripple-light={`${ripple === "light"}`}
        className={`align-middle w-full select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none xs:text-sm md:text-lg py-3.5 px-10 ${bg} ${text} hover:opacity-[0.85] focus:opacity-[0.85] active:opacity-[0.85] rounded-full ${className ?? ""}`}
      />
    </a>
  )
}