import { ComponentChildren } from "preact"
import { useLayoutEffect } from "preact/hooks"
import { TGlobalState } from "../layers/types/mod.ts"
import { useAction } from "./store.provider.tsx"

type TPageContainer = {
  state: TGlobalState
  children: ComponentChildren
}

export function PageContainer({ children, state }: TPageContainer) {
  const { constants: { setData: setDataConstants } } = useAction()

  useLayoutEffect(() => setDataConstants(state.constants), [])

  return (
    <>
      {children}
    </>
  )
}
