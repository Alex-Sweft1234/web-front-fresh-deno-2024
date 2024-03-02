import { Container, Link } from "../../shared/ui/mod.ts"

export function Footer() {
	const EMAIL = Deno.env.get("FRESH_APP_EMAIL")

	return (
		<footer className="h-[190px]">
			<Container className="h-full py-8 flex items-end">
				<div className="w-full flex justify-between items-end">
					<div className="max-w-[550px] w-full text-[13px]">
						<div className="mb-1">© 2024 Teboil</div>
						<div className="flex flex-nowrap justify-between gap-4">
							<div>
								<Link href="/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-[16px]">
									Пользовательское соглашение
								</Link>
							</div>
							<div>
								<Link href="/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-[16px]">
									Правила программы
								</Link>
							</div>
						</div>
					</div>
					<div>
						Пишите нам на:
						<br />
						<Link
							target="_blank"
							href={`mailto:${EMAIL}`}
							rel="noopener noreferrer"
							className="underline font-bold text-[20px]"
						>
							{EMAIL}
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	)
}
