import { ComponentChildren } from "preact"

type TContainer = {
	maxWidth?: number
	className?: string
	children: ComponentChildren
}

export function Container({ children, maxWidth = 1300, className }: TContainer) {
	return (
		<div className={`mx-auto px-[15px] md:px-[20px] ${className ?? ""}`} style={{ maxWidth: `${maxWidth}px` }}>
			{children}
		</div>
	)
}
