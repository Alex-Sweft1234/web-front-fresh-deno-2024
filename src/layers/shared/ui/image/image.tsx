import { JSX } from "preact"
import { asset } from "$fresh/runtime.ts"

export function Image({ src, alt, ...props }: JSX.HTMLAttributes<HTMLImageElement>) {
	return <img {...props} src={asset(src as string)} alt={alt} />
}
