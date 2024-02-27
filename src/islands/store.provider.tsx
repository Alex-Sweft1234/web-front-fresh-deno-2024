import { createContext, ComponentChildren } from "preact"
import { useMemo, useContext } from "preact/hooks"
import { useSignal } from "@preact/signals"
import { IGlobalContext, TAlert, TConstants, TSuccessResponse } from "../layers/types/mod.ts"
import { getConstants } from "../layers/shared/api/mod.ts"

type TStoreProvider = {
  children: ComponentChildren
}

export const AppStore = createContext<IGlobalContext>({
  constants: { data: null, loading: false, setData: () => {} },
  modals: { data: { modal: null, alert: null }, setAlert: () => {} },
})

export function StoreProvider({ children }: TStoreProvider) {
  const constants = useSignal<string | null>(null)
  const isLoadConstants = useSignal<boolean>(false)

  const modals = useSignal<string>(JSON.stringify({ modal: null, alert: null }))

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

  const openAlert = (state?: TAlert) => {
    if (state) {
      modals.value = JSON.stringify({ ...values.modals.data, alert: state })
    } else {
      modals.value = JSON.stringify({ ...values.modals.data, alert: null })
    }
  }

  const values = useMemo((): IGlobalContext => ({
    constants: {
      setData: uploadConstants,
      loading: isLoadConstants.value,
      data: constants.value ? JSON.parse(constants.value) : null,
    },
    modals: {
      setAlert: openAlert,
      data: JSON.parse(modals.value),
    },
  }), [constants.value, isLoadConstants.value, modals.value])

  return <AppStore.Provider value={values}>{children}</AppStore.Provider>
}

export function useSelector() {
  const context: IGlobalContext = useContext(AppStore)

  if(!context) console.error('Error deploying App context!')

  return {
    constants: { data: context.constants.data, loading: context.constants.loading },
    modals: { data: context.modals.data },
  }
}

export function useAction() {
  const context: IGlobalContext = useContext(AppStore)

  if(!context) console.error('Error deploying App context!')

  return {
    constants: { setData: context.constants.setData },
    modals: { setAlert: context.modals.setAlert },
  }
}
