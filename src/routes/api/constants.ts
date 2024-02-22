import { FreshContext, Handlers } from "$fresh/src/server/types.ts"
import { getConstants } from "../../shared/api/mod.ts"
import { TSuccessResponse, TConstants } from "../../types/mod.ts"

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<any>) {
    await getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
      ctx.state.constants = data
    })
    
    return new Response(JSON.stringify(ctx.state.constants), {
      headers: { "Content-Type": "application/json" },
    })
  },
}