import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"
import { TColors } from "../../../types/mod.ts"

interface IButton {
  color?: TColors
  bgColor?: TColors
}

export function Button({
  disabled,
  color = "secondary",
  bgColor = "primary",
  ...props
}: JSX.HTMLAttributes<HTMLButtonElement> & IButton) {
  const text = color === "primary" ? "text-primary" : color === "secondary" ? "text-secondary" : "text-tertiary"
  const bg = bgColor === "primary" ? "bg-primary" : bgColor === "secondary" ? "bg-secondary" : "bg-tertiary"

  return (
    <button
      {...props}
      disabled={disabled || !IS_BROWSER}
      class={`align-middle w-full select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none xs:text-sm md:text-lg py-3.5 px-10 ${bg} ${text} hover:opacity-[0.85] focus:opacity-[0.85] active:opacity-[0.85] rounded-full`}
      data-ripple-light="true"
    />
  )
}
