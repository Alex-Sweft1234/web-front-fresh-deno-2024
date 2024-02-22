import { ComponentChildren } from "preact"
import { useLayoutEffect } from "preact/hooks"
import { TGlobalState } from "../types/mod.ts"
import { useStore } from "./store.provider.tsx"

type TPageContainer = {
  state: TGlobalState
  children: ComponentChildren
}

export function PageContainer({ children, state }: TPageContainer) {
  const { constants: { setData } } = useStore()

  useLayoutEffect(() => setData(state.constants), [state])

  return <>{children}</>
}
