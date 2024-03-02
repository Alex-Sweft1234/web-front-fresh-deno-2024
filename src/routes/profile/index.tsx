import { FreshContext, Handlers, PageProps } from "$fresh/src/server/types.ts"
import { ProfilePage } from "../../layers/pages/mod.ts"
import { getConstants } from "../../layers/shared/api/mod.ts"
import { PageContainer } from "../../islands/page_container/page.container.tsx"
import { TConstants, TGlobalState, TSuccessResponse } from "../../layers/types/mod.ts"

export const handler: Handlers = {
	async GET(_req: Request, ctx: FreshContext<any>) {
		await getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
			ctx.state.constants = data
		})

		if (!ctx.state.constants.IS_PROJECT_START_ACTION) {
			return Response.redirect(`${ctx.url.origin}/start`, 302)
		}

		return ctx.render()
	},
}

export default function Profile({ state }: PageProps<unknown, TGlobalState>) {
	return (
		<PageContainer state={state}>
			<ProfilePage state={state} />
		</PageContainer>
	)
}
