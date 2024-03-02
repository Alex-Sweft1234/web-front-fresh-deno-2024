import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts"

interface IIconButton {
	ripple?: "light" | "dark"
}
export function IconButton({
	children,
	disabled,
	ripple = "light",
	...props
}: JSX.HTMLAttributes<HTMLButtonElement> & IIconButton) {
	return (
		<button
			{...props}
			disabled={disabled || !IS_BROWSER}
			data-ripple-dark={`${ripple === "dark"}`}
			data-ripple-light={`${ripple === "light"}`}
			className="relative align-middle select-none transition-all ease-in-out delay-150 rounded-full p-1 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:opacity-[0.85] hover:bg-[#25435d1a]"
		>
			{children}
		</button>
	)
}
