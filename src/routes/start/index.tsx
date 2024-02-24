import { FreshContext, Handlers } from "$fresh/server.ts"
import { StartPage } from "../../layers/pages/mod.ts"
import { getConstants } from "../../layers/shared/api/mod.ts"
import { TConstants, TSuccessResponse } from "../../layers/types/mod.ts"

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<any>) {
    await getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
      ctx.state.constants = data
    })

    if (ctx.state.constants.IS_PROJECT_START_ACTION) {
      return ctx.renderNotFound()
    }

    return ctx.render()
  }
}

export default function Start() {
  return <StartPage />
}
