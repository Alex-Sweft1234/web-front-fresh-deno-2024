import { LayoutConfig, PageProps } from "$fresh/server.ts"

export const config: LayoutConfig = { skipInheritedLayouts: true }

export default function StartLayout({ Component }: PageProps) {
	return <Component />
}
