import { createContext, ComponentChildren } from "preact"
import { useMemo, useContext } from "preact/hooks"
import { useSignal } from "@preact/signals"
import { IGlobalContext, TConstants, TSuccessResponse } from "../types/mod.ts"
import { getConstants } from "../shared/api/mod.ts"

export const AppStore = createContext<IGlobalContext>({
  constants: { data: null, loading: false, setData: () => {} } })

type TStoreProvider = {
  children: ComponentChildren
}

export function StoreProvider({ children }: TStoreProvider) {
  const constants = useSignal<string | null>(null)
  const isLoadConstants = useSignal<boolean>(false)

  const uploadConstants = (state?: TConstants) => {
    isLoadConstants.value = true

    if (state) {
      constants.value = JSON.stringify(state)
      isLoadConstants.value = false
    } else {
      getConstants().then(({ data }: TSuccessResponse<TConstants>) => {
        constants.value = JSON.stringify(data)
        isLoadConstants.value = false
      })
    }
  }

  const values = useMemo((): IGlobalContext => ({
    constants: {
      setData: uploadConstants,
      loading: isLoadConstants.value,
      data: constants.value ? JSON.parse(constants.value) : null,
    },
  }), [constants.value, isLoadConstants.value])

  return <AppStore.Provider value={values}>{children}</AppStore.Provider>
}

export function useStore() {
  const context: IGlobalContext = useContext(AppStore)

  if(!context) console.error('Error deploying App context!')

  return context
}
