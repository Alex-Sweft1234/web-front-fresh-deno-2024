import { TConstants, TContextConstants } from "./constants.ts"
import { TContextModals } from "./modal.ts"

export interface IGlobalContext {
  constants: TContextConstants
  modals: TContextModals
}

export interface TGlobalState {
  constants: TConstants
  faq?: any
}

export type TPalette = {
  primary: "primary"
  secondary: "secondary"
  tertiary: "tertiary"
}

export type TColors = "primary" | "secondary" | "tertiary"
