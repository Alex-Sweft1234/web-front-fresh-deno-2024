import { DesktopHeader } from "./desktop.header.tsx"
import { TMenu } from "../../types/mod.ts"
import { routes } from "../../shared/config/mod.ts"

const menu: TMenu[] = [
	{
		id: 1,
		link: "Главная",
		path: routes.home,
	},
	{
		id: 2,
		link: "Вопросы-ответы",
		path: routes.faq,
	},
	{
		id: 3,
		link: "Задать вопрос",
		path: routes.feedback,
	},
]

export function HeaderRoot() {
	return (
		<header className="h-[120px]">
			<DesktopHeader items={menu} />
		</header>
	)
}
