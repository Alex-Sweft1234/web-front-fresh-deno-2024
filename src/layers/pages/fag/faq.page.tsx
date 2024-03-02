import { Container } from "../../shared/ui/mod.ts"
import { TFaq } from "../../types/mod.ts"
import { Faq } from "../../../islands/faq/faq.tsx"

interface IFaqPage {
	data?: TFaq[]
}

export function FaqPage({ data = [] }: IFaqPage) {
	return (
		<div className="bg-primary">
			<Container maxWidth={1000}>
				<Faq data={data} />
			</Container>
		</div>
	)
}
