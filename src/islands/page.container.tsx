import { ComponentChildren } from "preact"
import { useLayoutEffect } from "preact/hooks"
import { TGlobalState } from "../types/mod.ts"
import { useStore } from "./store.provider.tsx"
import {Alert} from "./alert.tsx";

type TPageContainer = {
  state: TGlobalState
  children: ComponentChildren
}

export function PageContainer({ children, state }: TPageContainer) {
  const { constants: { setData: setDataConstants } } = useStore()

  useLayoutEffect(() => setDataConstants(state.constants), [])

  return (
    <>
      <Alert />
      {children}
    </>
  )
}
