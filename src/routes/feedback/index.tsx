import { FreshContext, Handlers, PageProps } from "$fresh/src/server/types.ts"
import { getConstants, getFeedbackTheme } from "../../layers/shared/api/mod.ts"
import { PageContainer } from "../../islands/page_container/page.container.tsx"
import { TConstants, TFeedbackTheme, TGlobalState, TSuccessResponse } from "../../layers/types/mod.ts"
import { FeedbackPage } from "../../layers/pages/feedback/feedback.page.tsx"

export const handler: Handlers = {
	async GET(_req: Request, ctx: FreshContext<any>) {
		await getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
			ctx.state.constants = data
		})

		if (!ctx.state.constants.IS_PROJECT_START_ACTION) {
			return Response.redirect(`${ctx.url.origin}/start`, 302)
		}

		await getFeedbackTheme().then(({ data }: TSuccessResponse<{ themes: TFeedbackTheme[] }>) => {
			ctx.state.feedbackTheme = data.themes
		})

		return ctx.render()
	},
}

export default function Feedback({ state }: PageProps<unknown, TGlobalState>) {
	return (
		<PageContainer state={state}>
			<FeedbackPage state={state} />
		</PageContainer>
	)
}
