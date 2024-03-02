import { Container } from "../../shared/ui/mod.ts"
import { TGlobalState } from "../../types/mod.ts"

interface IFeedbackPage {
	state: TGlobalState
}

export function FeedbackPage({ state }: IFeedbackPage) {
	return <Container>{JSON.stringify(state.feedbackTheme)}</Container>
}
