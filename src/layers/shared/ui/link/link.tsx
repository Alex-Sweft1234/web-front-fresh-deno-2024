import { JSX } from "preact"

export function Link({ className, ...props }: JSX.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			className={`bg-transparent ${className ?? ""}`}
		/>
	)
}
