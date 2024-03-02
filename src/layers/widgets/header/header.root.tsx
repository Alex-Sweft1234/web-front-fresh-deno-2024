import { DesktopHeader } from "./desktop.header.tsx"
import { TMenu } from "../../types/mod.ts"

const menu: TMenu[] = [
	{
		id: 1,
		link: "Главная",
		path: "/",
	},
	{
		id: 2,
		link: "Вопросы-ответы",
		path: "/faq",
	},
]

export function HeaderRoot() {
	return (
		<header className="h-[120px]">
			<DesktopHeader items={menu} />
		</header>
	)
}
