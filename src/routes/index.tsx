import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import { HomePage } from "../pages/mod.ts"
import { getConstants } from "../shared/api/mod.ts"
import { PageContainer } from "../islands/page.container.tsx"
import { TConstants, TGlobalState, TSuccessResponse } from "../types/mod.ts"

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<any>) {
    await getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
      ctx.state.constants = data
    })
    
    if (!ctx.state.constants.IS_PROJECT_START_ACTION) {
      return Response.redirect(`${ctx.url.origin}/start`, 302)
    }
    
    return ctx.render()
  }
}

export default function Home({ state }: PageProps<unknown, TGlobalState>) {
  return (
    <PageContainer state={state}>
      <HomePage />
    </PageContainer>
  )
}
