import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"
import { palette } from "../../themes/palette.ts"

interface IButton {
  color?: string
  bgColor?: string
}

export function Button({
  disabled,
  color = palette.primary,
  bgColor = palette.secondary,
  ...props
}: JSX.HTMLAttributes<HTMLButtonElement> & IButton) {
  return (
    <button
      {...props}
      disabled={disabled || !IS_BROWSER}
      class={`align-middle w-full select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none xs:text-sm md:text-lg py-3.5 px-10 bg-${bgColor} text-${color} shadow-md shadow-${bgColor}/10 hover:shadow-lg hover:shadow-${bgColor}/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full`}
      data-ripple-light="true"
    />
  )
}
