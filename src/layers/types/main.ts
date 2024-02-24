import { TConstants, TContextConstants } from "./constants.ts"

export interface IGlobalContext {
  constants: TContextConstants
}

export interface TGlobalState {
  constants: TConstants
}
