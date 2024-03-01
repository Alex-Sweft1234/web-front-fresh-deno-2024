import { TConstants, TContextConstants } from "./constants.ts"
import { TContextModals } from "./modal.ts"
import { TFaq } from "./faq.ts"

export interface IGlobalContext {
  constants: TContextConstants
  modals: TContextModals
}

export interface TGlobalState {
  constants: TConstants
  faq?: TFaq[]
}

export type TPalette = {
  primary: "primary"
  secondary: "secondary"
  tertiary: "tertiary"
}

export type TColors = "primary" | "secondary" | "tertiary"
