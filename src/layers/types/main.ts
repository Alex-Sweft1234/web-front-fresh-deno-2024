import { TConstants, TContextConstants } from "./constants.ts"
import { TContextModals } from "./modal.ts"

export interface IGlobalContext {
  constants: TContextConstants
  modals: TContextModals
}

export interface TGlobalState {
  constants: TConstants
}

export type TPalette = {
  primary: string
  secondary: string
}
