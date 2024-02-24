import { apiFetch } from "./service.ts"
import { EMethodPath } from "./../../types/mod.ts"

export const getConstants = async () => {
  return await apiFetch({ url: EMethodPath.CONST,  method: 'GET', })
}
